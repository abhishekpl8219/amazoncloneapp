'use client'
import SearchResult from '@/components/SearchResult';
import { useSupabase } from '@/lib/supabase/hooks/useSupabase';
import { useParams } from 'next/navigation'
import React, { useEffect, useRef } from 'react'

const page = () => {
    const {query}= useParams();
    const initialized = useRef(false);
    const {filteredData,getFilteredData}= useSupabase();
    useEffect(()=>{
      if (!initialized.current) {
        initialized.current = true
        getFilteredData(query.toString());
      }

    },[])
 
  return (
    <div>
      {}
     <SearchResult filterData = {filteredData}/>
      
    </div>
  )
}

export default page
