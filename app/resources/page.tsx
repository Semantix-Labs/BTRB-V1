import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Resources',
}

export default function ResourcesPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6 font-heading text-[var(--color-primary)]">Resources</h1>
            <p className="text-lg text-gray-700">Download guides, forms, and policies.</p>
        </div>
    )
}
