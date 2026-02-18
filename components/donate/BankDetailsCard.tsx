import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BankDetailsCard() {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 max-w-lg mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-[var(--color-secondary)]" />

            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">Bank Transfer Details</h3>
                <p className="text-sm text-gray-500">Please use the details below to make a direct deposit.</p>
            </div>

            <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-500 font-medium text-sm">Account Name</span>
                    <span className="font-bold text-[var(--color-primary)] text-right">BARB Sri Lanka</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-500 font-medium text-sm">Account Number</span>
                    <div className="text-right">
                        <span className="font-bold text-[var(--color-primary)] block font-mono">1234-5678-9012</span>
                    </div>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-500 font-medium text-sm">Bank</span>
                    <span className="font-bold text-[var(--color-primary)] text-right">Commercial Bank</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-500 font-medium text-sm">Branch</span>
                    <span className="font-bold text-[var(--color-primary)] text-right">Main Branch, Colombo</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-500 font-medium text-sm">Swift Code</span>
                    <span className="font-bold text-[var(--color-primary)] text-right">COMBALK</span>
                </div>
            </div>

            <div className="mt-8 bg-blue-50 p-4 rounded-lg text-sm text-blue-800 text-center">
                <p>
                    <span className="font-semibold block mb-1">Important:</span>
                    Please ensure to state your name and 'Donation' in the transfer description.
                </p>
            </div>
        </div>
    );
}
