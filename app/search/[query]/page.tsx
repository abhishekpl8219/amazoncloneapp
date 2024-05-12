'use client'
import SearchResult from '@/components/SearchResult';
import { useSupabase } from '@/lib/supabase/hooks/useSupabase';
import { useParams } from 'next/navigation'
import React, { useEffect, useRef } from 'react'

const SearchPage = () => {
    const {query}= useParams();
    const initialized = useRef(false);
    const {filteredData,getFilteredData}= useSupabase();
    useEffect(()=>{
      if (!initialized.current) {
        initialized.current = true
        getFilteredData(query.toString());
      }

    },[query,getFilteredData])
 
  return (
    <div>
      {}
     <SearchResult filterData = {filteredData}/>
      
    </div>
  )
}

export default SearchPage
