
import React from 'react';
import Dashboard from './components/Dashboard';
import { createServerSupabaseClient } from '@/app/supabase-server';
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'


type Props = {}

const page = async (props: Props) => {
  const supabase = createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    // This route can only be accessed by authenticated users.
    // Unauthenticated users will be redirected to the `/signin` route.
    redirect('/signin')
  } 
  
  return (
    <div className='dark-light-mode'>
      <Dashboard />
    </div>
  )
}

export default page