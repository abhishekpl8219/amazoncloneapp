'use client'
import { useSupabase } from '@/lib/supabase/hooks/useSupabase';
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
    const {query}= useParams();
    const {filteredData,getFilteredData}= useSupabase();
    useEffect(()=>{
        getFilteredData(query.toString());

    },[])
    console.log(filteredData);
  return (
    <div>
    
      {query}
    </div>
  )
}

export default page
