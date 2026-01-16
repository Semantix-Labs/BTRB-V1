import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { supabase } from "@/lib/supabase/client";

// Define the type for News items
interface NewsItem {
    id: string;
    title: string;
    content: string; // Used as summary for now
    event_date: string | null;
    created_at: string;
}

export async function NewsWidget() {
    // Fetch latest 3 news items using server-side fetching strategy
    // Note: In Next.js App Router, we can fetch directly in the component if it's async (Server Component)

    // Since we don't have Supabase Service Role here, we use the client but it runs on server.
    // For production, ensure appropriate RLS or use a Service Role client if accessing protected data.
    // 'news' table is readable by public via RLS, so this is safe.

    const { data: newsItems, error } = await supabase
        .from('news')
        .select('id, title, content, event_date, created_at')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(3);

    if (error) {
        console.error("Error fetching news:", error);
        // Return empty state on error
        return null;
    }

    // If no news, don't render the section (or render a placeholder if preferred)
    if (!newsItems || newsItems.length === 0) {
        return (
            <section className="py-20 bg-gray-50 border-t">
                <div className="container mx-auto px-4 text-center text-gray-500">
                    <h2 className="text-2xl font-bold font-heading text-[var(--color-primary)] mb-4">Latest News</h2>
                    <p className="italic">No recent updates available.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold font-heading text-[var(--color-primary)] mb-2">Latest News & Events</h2>
                        <p className="text-gray-600">Updates from the regulatory board.</p>
                    </div>
                    {/* Link to full news archive could go here */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newsItems.map((item: NewsItem) => (
                        <div key={item.id} className="group cursor-pointer">
                            <div className="mb-4 text-xs text-gray-500 flex items-center gap-2 uppercase tracking-wide font-medium">
                                <CalendarDays className="w-4 h-4" />
                                {new Date(item.event_date || item.created_at).toLocaleDateString()}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-[var(--color-primary)] transition-colors mb-3 line-clamp-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                                {item.content}
                            </p>
                            <div className="text-[var(--color-accent)] text-sm font-semibold group-hover:underline">Read More &rarr;</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
