import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';

export const load: PageServerLoad = async () => {
    const { data: submissions, error } = await db
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);

    if (error) {
        console.error('Failed to load submissions:', error);
        return { submissions: [] };
    }

    return { submissions: submissions ?? [] };
};
