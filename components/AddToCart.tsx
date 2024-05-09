import React from 'react'
import prime from "../public/prime-logo.png"
import Image from 'next/image'
import { useAppDispatch } from '@/lib/supabase/hooks/redux'
import { addToCart } from '@/redux/cartSlice'
import ProductCard from './ProductCard'
import { MdProductionQuantityLimits } from 'react-icons/md'
const AddToCart = ({product}:{product:any}) => {
  const dispatch = useAppDispatch();

  return (
    <div className='border border-gray-300 rounded-md h-fit'>
        <div className='p-4'><Image src = {prime} width={40} height={40} alt = {"prime"}/></div>
        
        <div className='p-4'>
        <h1><span className='text-[#147C8F]'>FREE delivery</span> Thursday, 21 March. <span className='text-[#147C8F]'>Details</span></h1>
                <h1 className='mt-4'>Or fastest delivery Tomorrow, 20 March. Order within 15 hrs 53 mins. Details</h1>
                <p className='text-[#147C8F] my-2'>Deliver to Abhishek  - Nadaun 177033</p>
        <button className='bg-[#FFD814] w-full rounded-full py-1' onClick={() => {
                    dispatch(addToCart(product));
                   ;
                }}>
          Add to cart</button>
        <button className='bg-[#FFA41C] w-full rounded-full py-1 my-2'>Buy Now</button>
        </div>
      
    </div>
  )
}

export default AddToCart