import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types_db';


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

export const createClientSupabase = () => createClient<Database>(supabaseUrl, supabaseKey);


export async function getSession() {
    const supabase = createClientSupabase();
    try {
        const { data: session, error } = await supabase.auth.getSession();
        if (error) throw error;
        return session;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

export async function getUserDetails() {
    const supabase = createClientSupabase();
    try {
        const { data: userDetails, error } = await supabase.from('users').select('*').single();
        if (error) throw error;
        return userDetails;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

export async function getSubscription() {
    const supabase = createClientSupabase();
    try {
        const { data: subscription, error } = await supabase
            .from('subscriptions')
            .select('*, prices(*, products(*))')
            .in('status', ['trialing', 'active'])
            .maybeSingle()
            .throwOnError();
        if (error) throw error;
        return subscription;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

export const getActiveProductsWithPrices = async () => {
    const supabase = createClientSupabase();
    const { data, error } = await supabase
        .from('products')
        .select('*, prices(*)')
        .eq('active', true)
        .eq('prices.active', true)
        .order('metadata->index')
        .order('unit_amount', { foreignTable: 'prices' });

    if (error) {
        console.log(error.message);
    }
    return data ?? [];
};
