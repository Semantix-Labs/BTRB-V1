import { supabase } from "@/lib/supabase/client";
import { TherapistCard, Therapist } from "./TherapistCard";
import { AlertCircle } from "lucide-react";

export async function DirectoryList({
    query,
    status = 'all'
}: {
    query: string;
    status?: string;
}) {
    let dbQuery = supabase
        .from('public_directory')
        .select('*');

    // Filter by status
    if (status === 'authorized') {
        dbQuery = dbQuery.eq('status', 'authorized_active');
    } else if (status === 'unauthorized') {
        dbQuery = dbQuery.eq('status', 'unauthorized_inactive');
    } else if (status === 'approved') {
        dbQuery = dbQuery.eq('status', 'approved_non_certified');
    } else {
        // 'all' or default
        dbQuery = dbQuery.in('status', ['authorized_active', 'unauthorized_inactive', 'approved_non_certified']);
    }

    if (query) {
        dbQuery = dbQuery.or(`full_name.ilike.%${query}%,designation.ilike.%${query}%,work_place_address.ilike.%${query}%`);
    }

    let { data: therapists, error } = await dbQuery;

    if (error) {
        console.error("Directory fetch error:", error);
        return (
            <div className="text-center py-12">
                <p className="text-red-500">Failed to load directory. Please try again later.</p>
            </div>
        );
    }

    if (!therapists || therapists.length === 0) {
        return (
            <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                    <AlertCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">No Therapists Found</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                    {query ? `No therapists match "${query}".` : "Our directory is currently being updated. Please check back soon."}
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapists.map((therapist) => (
                <TherapistCard key={therapist.id} therapist={therapist as Therapist} />
            ))}
        </div>
    );
}
