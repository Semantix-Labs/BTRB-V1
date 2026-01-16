import { supabase } from "@/lib/supabase/client";
import { User } from "lucide-react";

interface BoardMember {
    id: string;
    name: string;
    role: string;
    credentials: string | null;
    bio: string | null;
    order_index: number;
}

export async function BoardSection() {
    // Fetch board members
    const { data: members, error } = await supabase
        .from('board_members')
        .select('*')
        .order('order_index', { ascending: true });

    if (error) {
        console.error("Error fetching board members:", error);
        return null;
    }

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading text-[var(--color-primary)] mb-4">Board of Directors</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Distinguished professionals committed to the governance and advancement of behaviour therapy.
                    </p>
                </div>

                {!members || members.length === 0 ? (
                    <div className="text-center py-10 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                        <p className="text-gray-500 italic">Board member profiles coming soon.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {members.map((member: BoardMember) => (
                            <div key={member.id} className="group p-6 rounded-xl border border-gray-100 bg-white hover:border-[var(--color-accent)] hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center gap-5 mb-5">
                                    <div className="w-16 h-16 rounded-full bg-gray-50 border-2 border-white shadow-sm flex items-center justify-center text-gray-400 group-hover:border-[var(--color-accent)] transition-colors">
                                        {/* Placeholder for real image, using Icon fallback */}
                                        <User className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors">{member.name}</h3>
                                        <p className="text-sm font-medium text-[var(--color-secondary)] mb-1">{member.role}</p>
                                        {member.credentials && (
                                            <span className="inline-block px-2 py-0.5 rounded-full bg-blue-50 text-[10px] uppercase font-semibold text-blue-700 tracking-wide">
                                                {member.credentials}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                {member.bio && (
                                    <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4 mt-2">
                                        {member.bio}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
