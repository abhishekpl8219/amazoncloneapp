"use client"
import { useAppSelector } from '@/lib/supabase/hooks/redux'
import { getCart } from '@/redux/cartSlice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Success = () => {
    const cart = useAppSelector(getCart)
  return (
    <div className='absolute top-0 w-full bg-white py-12'>
        <div className='text-center mx-auto w-[70%]'>
        <h1>Thanks you for ordering </h1>
        
        <div className=''>
            <h1 className='font-bold py-3 underline'>Order details</h1>
            {
                cart.map((product:any)=>{
                    return(
                        <div className='flex' key = {product.id}>
                            {
                         <Image src ={product.image} alt = {product.title} width = {100} height= {100}/> 
                            }
                            <div>
                             <h1 className=' ml-5 font-bold'>{product.title}</h1>
                             <h1 className=' ml-5 font-bold'>{product.price}</h1>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            </div>
            <Link href={"/"} className='bg-[#FFD814] px-4 py-1 rounded-md my-5  ml-80 mt-30 mx-auto items-center'>Buy more products</Link>
   
    </div>
  )
}

export default Success
