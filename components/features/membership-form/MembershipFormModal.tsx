'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { PersonalInfo } from './components/personal-info';
import { CriteriaSelection } from './components/criteria-selection';
import { AdditionalInfo } from './components/additional-info';
import { TermsAndConditions } from './components/terms-and-conditions';
import { ReviewAndSubmit } from './components/review-and-submit';
import { OtpVerificationModal } from './components/OtpVerificationModal';
import { MembershipForm } from './MembershipForm';
import { X } from 'lucide-react';

interface MembershipFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MembershipFormModal({ isOpen, onClose }: MembershipFormModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-6 overflow-y-auto">
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg bg-background shadow-lg">
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-4 z-10"
                    onClick={onClose}
                >
                    <X className="h-4 w-4" />
                </Button>
                <MembershipForm />
            </div>
        </div>
    );
}
