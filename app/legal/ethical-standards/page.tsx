import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Ethical Standards',
}

export default function EthicalStandardsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6 font-heading text-[var(--color-primary)]">Ethical Standards</h1>
            <p className="text-lg text-gray-700 mb-8">Read our code of ethics and conduct.</p>
            <a
                href="/IBAO-Ethical-Guidelines-V100.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-colors bg-[var(--color-primary)] rounded-lg hover:bg-blue-800"
            >
                View Ethical Guidelines (PDF)
            </a>
        </div>
    )
}
