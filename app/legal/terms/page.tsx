import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms & Conditions',
}

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6 font-heading text-[var(--color-primary)]">Terms & Conditions</h1>
            <p className="text-lg text-gray-700">Website usage terms and conditions.</p>
        </div>
    )
}
