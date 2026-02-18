import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'
import type { ComponentProps } from '../types/form-types'

type HandleChange = (checked: boolean, name: string) => void;

export function TermsAndConditions({ formData, updateFormData }: ComponentProps) {
    const handleChange: HandleChange = (checked, name) => {
        updateFormData({ [name]: checked })
    }

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Section 4. Terms of Service</h2>
            <div className="space-y-2">
                <div className="flex items-start space-x-2">
                    <Checkbox
                        id="resident"
                        checked={formData.resident || false}
                        onCheckedChange={(checked) => handleChange(!!checked, 'resident')}
                    />
                    <Label htmlFor="resident" className="leading-normal">
                        I am a current resident of Sri Lanka or have been a resident in the past two (2) years.
                    </Label>
                </div>
                <div className="flex items-start space-x-2">
                    <Checkbox
                        id="agreeObjectives"
                        checked={formData.agreeObjectives || false}
                        onCheckedChange={(checked) => handleChange(!!checked, 'agreeObjectives')}
                    />
                    <Label htmlFor="agreeObjectives" className="leading-normal">
                        I agree to the current objectives and articles of association of BTRB and will be informed of any future amendments to these documents.
                    </Label>
                </div>
                <div className="flex items-start space-x-2">
                    <Checkbox
                        id="agreeMaintenance"
                        checked={formData.agreeMaintenance || false}
                        onCheckedChange={(checked) => handleChange(!!checked, 'agreeMaintenance')}
                    />
                    <Label htmlFor="agreeMaintenance" className="leading-normal">
                        I agree to meet the maintenance criteria to renew my certification, including supervision requirements, as directed by 1) governing body (IBAO, BACB, etc.); and 2) BTRB guidelines.
                    </Label>
                </div>
                <div className="flex items-start space-x-2">
                    <Checkbox
                        id="agreeLicense"
                        checked={formData.agreeLicense || false}
                        onCheckedChange={(checked) => handleChange(!!checked, 'agreeLicense')}
                    />
                    <Label htmlFor="agreeLicense" className="leading-normal">
                        I agree to obtain the necessary license or certification to practice outside the scope of a behaviour therapist.
                    </Label>
                </div>
                <div className="flex items-start space-x-2">
                    <Checkbox
                        id="agreeUpdate"
                        checked={formData.agreeUpdate || false}
                        onCheckedChange={(checked) => handleChange(!!checked, 'agreeUpdate')}
                    />
                    <Label htmlFor="agreeUpdate" className="leading-normal">
                        I agree to update my contact details within 30 days of any change.
                    </Label>
                </div>
                <div className="flex items-start space-x-2">
                    <Checkbox
                        id="agreeMalpractice"
                        checked={formData.agreeMalpractice || false}
                        onCheckedChange={(checked) => handleChange(!!checked, 'agreeMalpractice')}
                    />
                    <Label htmlFor="agreeMalpractice" className="leading-normal">
                        I agree that BTRB is not responsible for my malpractice and/or any lawsuit against me.
                    </Label>
                </div>
                <div className="flex items-start space-x-2">
                    <Checkbox
                        id="agreeEthics"
                        checked={formData.agreeEthics || false}
                        onCheckedChange={(checked) => handleChange(!!checked, 'agreeEthics')}
                    />
                    <Label htmlFor="agreeEthics" className="leading-normal">
                        I agree to the prospective ethical guidelines of the BTRB. Until these guidelines are implemented, the BTRB will adopt and abide by the current IBAO code of ethics.
                    </Label>
                </div>
                <div className="flex items-start space-x-2">
                    <Checkbox
                        id="agreePoliceClearance"
                        checked={formData.agreePoliceClearance || false}
                        onCheckedChange={(checked) => handleChange(!!checked, 'agreePoliceClearance')}
                    />
                    <Label htmlFor="agreePoliceClearance" className="leading-normal">
                        I agree to submit a police clearance report if I have selected &quot;Practicing as Behaviour Therapist for the past 2 years&quot; or &quot;Any other ABA qualifications&quot; after my application is accepted.
                    </Label>
                </div>
            </div>
        </div>
    )
}
