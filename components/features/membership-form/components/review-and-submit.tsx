'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { supabase } from '@/lib/supabase/client';
import type { ApplicationFormData } from '../types/form-types';
import { CheckCircle2, AlertCircle, Loader2, Upload, Database, Mail } from 'lucide-react';

const BUCKET = 'application-documents';

type Step = 'idle' | 'uploading' | 'saving' | 'emailing' | 'done' | 'error';

const STEP_LABELS: Record<Step, string> = {
    idle: 'Submit Application',
    uploading: 'Uploading documents…',
    saving: 'Saving application…',
    emailing: 'Sending confirmation…',
    done: 'Done',
    error: 'Submit Application',
};

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const ALLOWED_TYPES = /^(image\/.+|application\/pdf)$/;

async function tryUploadFile(
    file: File | undefined,
    folder: string
): Promise<string | null> {
    if (!file) return null;
    if (file.size > MAX_FILE_SIZE) {
        console.warn(`Upload skipped — file too large (${(file.size / 1024 / 1024).toFixed(1)} MB): ${file.name}`);
        return null;
    }
    if (!ALLOWED_TYPES.test(file.type)) {
        console.warn(`Upload skipped — invalid type (${file.type}): ${file.name}`);
        return null;
    }
    // Sanitize filename — Supabase Storage rejects keys with spaces or special chars
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
    const filePath = `${folder}/${Date.now()}_${safeName}`;
    try {
        const { error } = await supabase.storage.from(BUCKET).upload(filePath, file);
        if (error) {
            console.warn(`Upload skipped (${file.name}):`, error.message);
            return null;
        }
        return filePath;
    } catch (err) {
        console.warn(`Upload exception (${file.name}):`, err);
        return null;
    }
}

export function ReviewAndSubmit({ formData }: { formData: ApplicationFormData }) {
    const [step, setStep] = useState<Step>('idle');
    const [error, setError] = useState<string | null>(null);

    const getSpecialization = (data: ApplicationFormData) => {
        const specs = [];
        if (data.currentRBT) specs.push('RBT');
        if (data.currentIBT) specs.push('IBT');
        if (data.practicingBehaviorTherapist) specs.push('Behavior Therapist');
        if (data.behaviourAnalyst) specs.push('Behavior Analyst');
        if (data.otherABAQualifications) specs.push('Other ABA');
        return specs.join(', ') || 'Not specified';
    };

    const handleSubmit = async () => {
        setError(null);
        // Validate file sizes before touching the network
        const files = formData.files ?? {};
        const oversized = Object.entries(files)
            .filter(([, f]) => f instanceof File && (f as File).size > MAX_FILE_SIZE)
            .map(([k]) => k.replace(/File$/, ''));
        if (oversized.length > 0) {
            setError(`File(s) exceed the 10 MB limit: ${oversized.join(', ')}. Please reduce the file size and try again.`);
            setStep('error');
            return;
        }

        setStep('uploading');

        try {
            // --- Step 1: Upload files individually (non-fatal) ---
            const files = formData.files ?? {};
            const [
                nicFrontPath,
                nicBackPath,
                expiredRbtPath,
                expiredIbtPath,
                educationPath,
                workExpPath,
                cvPath,
                insurancePath,
            ] = await Promise.all([
                tryUploadFile(files['nicFrontFile'], 'nic'),
                tryUploadFile(files['nicBackFile'], 'nic'),
                tryUploadFile(files['expiredRBTFile'], 'certifications'),
                tryUploadFile(files['expiredIBTFile'], 'certifications'),
                tryUploadFile(files['educationFile'], 'education'),
                tryUploadFile(files['workExperienceFile'], 'work'),
                tryUploadFile(files['cvFile'], 'cv'),
                tryUploadFile(files['insuranceFile'], 'insurance'),
            ]);
            await tryUploadFile(files['behaviourAnalystFile'], 'certifications');

            // --- Step 2: Insert into DB via service-role API ---
            setStep('saving');
            const res = await fetch('/api/applications/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    first_name: formData.firstName,
                    surname: formData.surname,
                    date_of_birth: formData.dateOfBirth,
                    address_line: formData.addressLine,
                    city: formData.city,
                    post_code: formData.postCode,
                    phone: formData.phone,
                    phone_optional: formData.phoneOptional,
                    email: formData.email,
                    nic_or_passport: formData.nicOrPassport,
                    nic_front_file_name: nicFrontPath,
                    nic_back_file_name: nicBackPath,

                    current_rbt: formData.currentRBT ?? false,
                    rbt_certification_no: formData.rbtCertificationNo,
                    current_ibt: formData.currentIBT ?? false,
                    ibt_certification_no: formData.ibtCertificationNo,
                    expired_rbt: formData.expiredRBT ?? false,
                    expired_rbt_file_name: expiredRbtPath,
                    voluntary_inactive_rbt: formData.voluntaryInactiveRBT ?? false,
                    voluntary_inactive_rbt_certification_no: formData.voluntaryInactiveRBTCertificationNo,
                    voluntary_inactive_rbt_reactivation_date: formData.voluntaryInactiveRBTReactivationDate,
                    expired_ibt: formData.expiredIBT ?? false,
                    expired_ibt_file_name: expiredIbtPath,
                    practicing_behavior_therapist: formData.practicingBehaviorTherapist ?? false,
                    other_aba_qualifications: formData.otherABAQualifications ?? false,
                    behaviour_analyst: formData.behaviourAnalyst ?? false,

                    institution: formData.institution,
                    period_of_education: formData.periodOfEducation,
                    qualifications: formData.qualifications,
                    education_file_name: educationPath,
                    work_place_name: formData.workPlaceName,
                    work_place_address: formData.workPlaceAddress,
                    employment_period: formData.employmentPeriod,
                    designation: formData.designation,
                    full_time_part_time: formData.fullTimePartTime,
                    explanation_of_services: formData.explanationOfServices,
                    work_experience_file_name: workExpPath,
                    cv_file_name: cvPath,
                    insurance_file_name: insurancePath,

                    resident: formData.resident ?? false,
                    agree_objectives: formData.agreeObjectives ?? false,
                    agree_maintenance: formData.agreeMaintenance ?? false,
                    agree_license: formData.agreeLicense ?? false,
                    agree_update: formData.agreeUpdate ?? false,
                    agree_malpractice: formData.agreeMalpractice ?? false,
                    agree_ethics: formData.agreeEthics ?? false,
                    agree_police_clearance: formData.agreePoliceClearance ?? false,
                }),
            });

            if (!res.ok) {
                const json = await res.json();
                throw new Error(json.error ?? 'Failed to save application. Please try again.');
            }

            // --- Step 3: Send acknowledgement email (non-blocking) ---
            setStep('emailing');
            fetch('/api/applications/acknowledge', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    surname: formData.surname,
                    email: formData.email,
                }),
            }).catch((err) => console.error('Acknowledgement email failed:', err));

            setStep('done');
        } catch (err: unknown) {
            console.error('Submission error:', err);
            setError(err instanceof Error ? err.message : 'Submission failed. Please try again.');
            setStep('error');
        }
    };

    if (step === 'done') {
        return (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Application Submitted!</h3>
                <p className="text-green-700 max-w-md mx-auto">
                    Thank you for applying. Your application has been received and is under review.
                    A confirmation has been sent to <strong>{formData.email}</strong>.
                </p>
                <div className="mt-6">
                    <Button
                        variant="outline"
                        className="border-green-200 text-green-700 hover:bg-green-100"
                        onClick={() => window.location.href = '/'}
                    >
                        Return to Home
                    </Button>
                </div>
            </div>
        );
    }

    const isLoading = step === 'uploading' || step === 'saving' || step === 'emailing';

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--color-primary)]">Review Application</h2>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 space-y-4 text-sm text-gray-700">
                <div>
                    <span className="font-semibold block text-gray-900">Name:</span>
                    {formData.firstName} {formData.surname}
                </div>
                <div>
                    <span className="font-semibold block text-gray-900">Email:</span>
                    {formData.email}
                </div>
                <div>
                    <span className="font-semibold block text-gray-900">Phone:</span>
                    {formData.phone}
                </div>
                <div>
                    <span className="font-semibold block text-gray-900">Address:</span>
                    {[formData.addressLine, formData.city, formData.postCode].filter(Boolean).join(', ')}
                </div>
                <div>
                    <span className="font-semibold block text-gray-900">Specialization:</span>
                    {getSpecialization(formData)}
                </div>
                <div>
                    <span className="font-semibold block text-gray-900">Documents attached:</span>
                    {Object.keys(formData.files ?? {}).length} file(s)
                </div>
            </div>

            <p className="text-sm text-gray-500">
                Please verify all information is correct before submitting.
                By clicking submit, you confirm the information provided is accurate.
            </p>

            {/* Progress steps shown while loading */}
            {isLoading && (
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 space-y-2.5">
                    {[
                        { id: 'uploading', icon: <Upload className="w-4 h-4" />, label: 'Uploading documents' },
                        { id: 'saving',    icon: <Database className="w-4 h-4" />, label: 'Saving application' },
                        { id: 'emailing',  icon: <Mail className="w-4 h-4" />, label: 'Sending confirmation email' },
                    ].map(({ id, icon, label }) => {
                        const stepOrder = ['uploading', 'saving', 'emailing'];
                        const current = stepOrder.indexOf(step);
                        const thisIdx = stepOrder.indexOf(id);
                        const isDone = thisIdx < current;
                        const isActive = thisIdx === current;
                        return (
                            <div key={id} className={`flex items-center gap-2 text-sm ${isDone ? 'text-green-600' : isActive ? 'text-blue-700 font-medium' : 'text-gray-400'}`}>
                                {isDone ? <CheckCircle2 className="w-4 h-4" /> : isActive ? <Loader2 className="w-4 h-4 animate-spin" /> : icon}
                                {label}
                            </div>
                        );
                    })}
                </div>
            )}

            {error && (
                <div className="flex items-start gap-2 text-red-600 bg-red-50 p-4 rounded-lg text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{error}</span>
                </div>
            )}

            <Button
                onClick={handleSubmit}
                className="w-full h-12 text-base"
                disabled={isLoading}
            >
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {STEP_LABELS[step]}
                    </>
                ) : (
                    STEP_LABELS[step]
                )}
            </Button>
        </div>
    );
}
