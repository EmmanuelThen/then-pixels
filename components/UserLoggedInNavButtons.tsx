import React from 'react'
import { createServerSupabaseClient } from '@/app/supabase-server';
import ArrowButton from './ArrowButton';


type Props = {}

const UserLoggedInNavButtons = async (props: Props) => {
    const supabase = createServerSupabaseClient();
    const {
        data: { user }
    } = await supabase.auth.getUser();

    return (
        <div className='flex items-center justify-between gap-3'>
            {user ?
                (
                    <div className='hidden lg:block'>
                        <form action="/auth/signout" method="post">
                            <button type='submit' className='text-sm text-white bg-red9 hover:opacity-80 rounded-full px-2 py-[3px] flex items-center w-fit' >
                                Log out
                            </button>
                        </form>
                    </div>
                ) :
                (
                    <ArrowButton
                        buttonText='Pricing'
                        href='/pricing'
                    />
                )
            }
            <ArrowButton
                buttonText={user ? 'Dashboard' : 'Sign in'}
                href={user ? '/dashboard' : '/signin'}
            />
        </div>
    )
}

export default UserLoggedInNavButtons