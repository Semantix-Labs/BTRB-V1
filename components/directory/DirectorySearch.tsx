"use client";

import { Search } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function DirectorySearch() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    const handleStatusFilter = (status: string) => {
        const params = new URLSearchParams(searchParams);
        if (status && status !== 'all') {
            params.set('status', status);
        } else {
            params.delete('status');
        }
        replace(`${pathname}?${params.toString()}`);
    };

    const currentStatus = searchParams.get('status') || 'all';

    return (
        <div className="relative max-w-2xl mx-auto mb-16">
            <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search by name, specialization, or location..."
                    className="w-full pl-12 pr-6 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 focus:border-transparent transition-all text-base"
                    onChange={(e) => handleSearch(e.target.value)}
                    defaultValue={searchParams.get('query')?.toString()}
                />
            </div>

            {/* Status Filter Container */}
            <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="text-sm font-medium text-gray-600 mr-2">Filter by Status:</span>

                <button
                    onClick={() => handleStatusFilter('all')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${currentStatus === 'all'
                            ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]'
                            : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                        }`}
                >
                    All
                </button>

                <button
                    onClick={() => handleStatusFilter('authorized')}
                    className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1.5 transition-colors border ${currentStatus === 'authorized'
                            ? 'bg-green-500 text-white border-green-500'
                            : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                        }`}
                >
                    <span className={`w-2 h-2 rounded-full ${currentStatus === 'authorized' ? 'bg-white' : 'bg-green-500'}`} />
                    Authorized
                </button>

                <button
                    onClick={() => handleStatusFilter('unauthorized')}
                    className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1.5 transition-colors border ${currentStatus === 'unauthorized'
                            ? 'bg-red-500 text-white border-red-500'
                            : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                        }`}
                >
                    <span className={`w-2 h-2 rounded-full ${currentStatus === 'unauthorized' ? 'bg-white' : 'bg-red-500'}`} />
                    Unauthorized
                </button>

                <button
                    onClick={() => handleStatusFilter('approved')}
                    className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1.5 transition-colors border ${currentStatus === 'approved'
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                        }`}
                >
                    <span className={`w-2 h-2 rounded-full ${currentStatus === 'approved' ? 'bg-white' : 'bg-blue-500'}`} />
                    Approved Professionals
                </button>
            </div>
        </div>
    );
}
