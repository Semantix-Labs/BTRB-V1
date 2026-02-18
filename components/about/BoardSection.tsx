import { User } from "lucide-react";

// Static data based on provided copy
const members = [
    {
        id: "1",
        name: "Dr. Anton James",
        role: "President",
        credentials: "Chartered Behaviour Psychologist | BCBA | IBA | SME (IBAO)",
        bio: "A leader in the field of Applied Behaviour Analysis (ABA) for over 20 years, Dr James is the first and only professional from Sri Lanka certified as a Behaviour Analyst by the Ontario College of Psychologists and Behaviour Analysts & UK Society for Behaviour Analysis (UK-SBA). He also serves as a Professional Advisory Board Member for the International Behaviour Analysis Organisation (IBAO) and is a subject matter expert in ABA, contributing to the development of pre-approved ABA curricula for institutions worldwide.",
        image: null // Placeholder for image
    },
    {
        id: "2",
        name: "Chrystal Honsaker",
        role: "Secretary",
        credentials: "BCBA | IBA | LBA | MEd | PhD Candidate",
        bio: "With over two decades of experience actively working in the field of ABA in various roles including supervising Behaviour Therapists and Behaviour Analysts in multiple states in the USA, Chrystal actively contributes towards decision-making regarding the advancement of ABA across the country to increase the standard of care for individuals requiring ABA, while also creating career opportunities and networking through a professional regulatory body.",
        image: null
    },
    {
        id: "3",
        name: "Samantha Fernando",
        role: "Treasurer",
        credentials: "RBT | IBT | MSc Applied Psychology",
        bio: "Samantha is a highly qualified advocate and Co-Founder of a Multi-Disciplinary Centre for children with developmental disabilities, including autism, with over 15 years of experience. Her pioneering work in Sri Lanka includes launching the nation’s first tri-lingual disability parent support group (2016) and organizing the first ABA awareness conference (2007). Prior to her work in Special Needs Education, she spent over a decade as a Brand Manager using her marketing background. Samantha is deeply committed to promoting societal acceptance and life and work inclusion for all persons.",
        image: null
    }
];

export function BoardSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading text-[var(--color-primary)] mb-4">Meet the Professionals Guiding BARB’s Vision</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Our leadership combines international expertise with local insight ensuring our standards align with global benchmarks while staying culturally relevant and community-responsive.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {members.map((member) => (
                        <div key={member.id} className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-[var(--color-primary)]/20 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                            <div className="flex flex-col items-center text-center mb-6 min-h-[230px]">
                                <div className="w-24 h-24 rounded-full bg-gray-50 border-4 border-white shadow-md flex items-center justify-center text-gray-400 group-hover:border-[var(--color-secondary)] transition-colors mb-4 overflow-hidden">
                                    {/* Placeholder for real image, using Icon fallback */}
                                    <User className="w-10 h-10" />
                                </div>
                                <h3 className="font-bold text-xl text-[var(--color-primary)] mb-1">{member.name}</h3>
                                <p className="text-sm font-bold uppercase tracking-wide text-[var(--color-secondary)] mb-2">{member.role}</p>
                                <div className="bg-blue-50 px-3 py-1 rounded-full mt-auto">
                                    <p className="text-[10px] font-semibold text-blue-800 uppercase tracking-tight text-center leading-tight">
                                        {member.credentials}
                                    </p>
                                </div>
                            </div>
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
