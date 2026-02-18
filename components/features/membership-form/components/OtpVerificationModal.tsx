import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card } from '../ui/card';

interface OtpVerificationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onVerify: (otp: string) => void;
    onResend: () => void;
}

export const OtpVerificationModal: React.FC<OtpVerificationModalProps> = ({ isOpen, onClose, onVerify, onResend }) => {
    const [otp, setOtp] = useState('');

    if (!isOpen) return null;

    const handleVerify = () => {
        onVerify(otp);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <Card className="bg-white p-6 w-96 rounded shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Verify OTP</h2>
                <Input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    className="mb-4"
                />
                <div className="flex justify-end">
                    <Button onClick={onClose} variant="outline" className="mr-2">
                        Cancel
                    </Button>
                    <Button onClick={handleVerify}>
                        Verify
                    </Button>
                </div>
                <div className="mt-4 text-center">
                    <Button onClick={onResend} variant="link">
                        Resend OTP
                    </Button>
                </div>
            </Card>
        </div>
    );
};
