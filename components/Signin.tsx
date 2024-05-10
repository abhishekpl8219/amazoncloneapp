"use client"
import React from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { supabase } from '@/lib/supabase/products'
import { ThemeSupa } from '@supabase/auth-ui-shared'
const Signin = () => {
  return (
    <div className='bg-white absolute w-full top-0 py-12 '>
        <div className='w-[50%] mx-auto'>
        <Auth
    supabaseClient={supabase}
   
    appearance={{ theme: ThemeSupa }}
  />
        </div>

    </div>
  )
}

export default Signin
