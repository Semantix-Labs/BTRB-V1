import { CalendarClock } from "lucide-react";

export function UpcomingProgram() {
    return (
        <section className="py-24 bg-[var(--color-primary)] text-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="container relative mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-8 backdrop-blur-sm">
                        <CalendarClock className="w-8 h-8 text-[var(--color-secondary)]" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                        Coming Soon: Behaviour Analyst Training (RBA-SL)
                    </h2>

                    <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-8">
                        We’re in the process of launching a dedicated training pathway for aspiring Behaviour Analysts. This programme will include advanced coursework, supervised fieldwork, and exam preparation.
                    </p>

                    <div className="inline-block px-6 py-3 rounded-full bg-white/10 border border-white/20 text-sm font-semibold tracking-wide uppercase">
                        More details will be announced shortly
                    </div>
                </div>
            </div>
        </section>
    );
}
