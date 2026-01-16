import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Ethical Standards',
}

export default function EthicalStandardsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6 font-heading text-[var(--color-primary)]">Ethical Standards</h1>
            <p className="text-lg text-gray-700">Read our code of ethics and conduct.</p>
        </div>
    )
}
