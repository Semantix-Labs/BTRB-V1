import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Behaviour Therapy',
}

export default function AboutTherapyPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6 font-heading text-[var(--color-primary)]">About Behaviour Therapy</h1>
            <p className="text-lg text-gray-700">Learn what behaviour therapy is and how it helps.</p>
        </div>
    )
}
