import { User } from "lucide-react";
import Image from "next/image";

// Static data based on provided copy
const members = [
    {
        id: "1",
        name: "Dr Anton James",
        role: "President",
        credentials: "PhD | FBPsS | CPsychol | CSci | CEA | BCBA | IBA",
        bio: [
            "Dr Anton James has over 20 years of global experience in Applied Behaviour Analysis (ABA). He is a Board Certified Behavior Analyst (BCBA) in the United States, a Certified Behaviour Analyst in the United Kingdom, and a Registered Behaviour Analyst in Ontario, Canada. He is also an International Behaviour Analyst (IBA) with the International Behaviour Analysis Organisation (IBAO). He serves on the Professional Advisory Board of IBAO and is recognised as a Subject Matter Expert in Applied Behaviour Analysis.",
            "He was the first person from Sri Lanka to obtain an internationally recognised certification in Applied Behaviour Analysis. He introduced certified Behaviour Therapy to Sri Lanka and founded the Behaviour Analysis Registration Board (BARB). He is the Director of The Tree House International, which introduced Sri Lanka’s first IBAO pre-approved ABA curriculum.",
            "Dr Anton James is a Chartered Behavioural Psychologist in the Republic of Ireland, a Chartered Psychologist in the United Kingdom, a Chartered Scientist (UK), and a Chartered Educational Assessor (UK). He has been elected as a Fellow of both the British Psychological Society and the Psychological Society of Ireland.",
        ],
        image: "/Dr. Anton.jpeg",
        imageClassName: "object-cover object-top"
    },
    {
        id: "2",
        name: "Chrystal Honsaker",
        role: "Secretary",
        credentials: "BCBA | IBA | LBA | MEd | PhD Candidate",
        bio: [
            "Chrystal Honsaker is a Behaviour Analyst with 23 years of experience in Applied Behaviour Analysis (ABA). She is a Board Certified Behaviour Analyst (BCBA), a Licensed Behavior Analyst (LBA) in the state of Hawaii (USA), and an International Behaviour Analyst (IBA) through the International Behaviour Analysis Organization (IBAO). She has held numerous leadership roles directing regional ABA programmes, overseeing clinical operations, and supervising and training behaviour analysts and behaviour therapists.",
            "Chrystal is a Founder of the Behaviour Analysis Registration Board (BARB) and currently serves as the Assistant Director of The Tree House International. She holds a graduate certification in Organizational Behavior from Harvard Extension School (USA), and her work focuses on strengthening organisational practices within ABA while advancing sustainable, high-quality behavioural services. With expertise in International Psychology, specialising in Organisations and Systems, she applies a systems-level perspective to service delivery models informed by her work in diverse cross-cultural and international ABA contexts.",
        ],
        image: "/Chrystal (CJ) Honsaker.jpeg",
        imageClassName: "object-cover object-top"
    },
    {
        id: "3",
        name: "Samantha Fernando",
        role: "Treasurer",
        credentials: "RBT | IBT | MSC APPLIED PSYCHOLOGY",
        bio: [
            "Samantha is a highly qualified advocate and Co Founder of a multidisciplinary centre for children with developmental disabilities, including autism, called Reach Beyond. She is a Registered Behaviour Technician (USA) and an International Behaviour Therapist specialising in autism and ADHD. She has over 15 years of experience working with children with special needs and is the mother of a son on the autism spectrum. Her pioneering work in Sri Lanka includes launching the nation’s first trilingual disability parent support group in 2016 and organising the first ABA awareness conference in 2007. Samantha is deeply committed to promoting societal acceptance and inclusion in both life and work for all persons.",
        ],
        image: "/Samantha Profile Photo.jpeg",
        imageClassName: "object-cover scale-[1.7] translate-y-1"
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
                                <div className="w-24 h-24 rounded-full bg-gray-50 border-4 border-white shadow-md flex items-center justify-center text-gray-400 group-hover:border-[var(--color-secondary)] transition-colors mb-4 overflow-hidden relative">
                                    {member.image ? (
                                        <Image src={member.image} alt={member.name} fill className={member.imageClassName || "object-cover"} />
                                    ) : (
                                        <User className="w-10 h-10" />
                                    )}
                                </div>
                                <h3 className="font-bold text-xl text-[var(--color-primary)] mb-1">{member.name}</h3>
                                <p className="text-sm font-bold uppercase tracking-wide text-[var(--color-secondary)] mb-2">{member.role}</p>
                                <div className="bg-blue-50 px-3 py-1 rounded-full mt-auto">
                                    <p className="text-[10px] font-semibold text-blue-800 uppercase tracking-tight text-center leading-tight">
                                        {member.credentials}
                                    </p>
                                </div>
                            </div>
                            <div className="border-t border-gray-100 pt-6 space-y-3">
                                {member.bio.map((paragraph, i) => (
                                    <p key={i} className="text-gray-600 text-sm leading-relaxed text-justify">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
