'use client'
import AddToCart from '@/components/AddToCart'
import SingleProduct from '@/components/SingleProduct'
import { useSupabase } from '@/lib/supabase/hooks/useSupabase'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const ProductPage = () => {
    const {id}= useParams();
    const {singleProduct,getSingleProduct}=useSupabase();
    useEffect(()=>{
          getSingleProduct(Number(id));
    },[id,getSingleProduct])
    console.log("value of singleproduct",singleProduct);
  return (
    <div>
      
        <SingleProduct singleProduct = {singleProduct}/>
   
    
    </div>
  )
}

export default ProductPage
