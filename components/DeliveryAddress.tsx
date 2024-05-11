import { useAppSelector } from '@/lib/supabase/hooks/redux';
import { getCart } from '@/redux/cartSlice';
import Image from 'next/image';
import React from 'react'
import { FaLock } from 'react-icons/fa';
import amazonlogo from "../public/amazon-logo.png";

const DeliveryAddress = () => {
    const cart = useAppSelector(getCart);
  return (
    <div className='border-b w-[70%] mx-auto  border-gray-300'>
  
      
      <div className=" ">
        <div className="flex mt-2 justify-between border-b  border-gray-300">
          <h1 className="mt-10 font-bold text-lg"> 1. Delivery Address</h1>
          <p className="text-sm">
            Abhishek Patial <br />
            Star Apartments
            <br />
            Tibeti Colony
            <br />
            Nadaun Himachal Pradesh
            <br />
            Add delivery Instructions
          </p>
        </div>
      </div>
      <div className=" mx-auto">
        <div className="flex mt-2 justify-between">
          <h1 className="mt-10 font-bold text-lg"> 2. Items and Delivery</h1>
        </div>
        {cart.map((product: any) => {
          return (
            <div key={product.title} className="my-4">
              <div className="flex">
                <Image
                  src={product.image}
                  height={150}
                  width={150}
                  alt={product.title}
                />
                <div className="ml-4">
                  <h1 className="font-semibold">{product.title}</h1>
                  <p className="text-2xl font-bold py-2 ">${product.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>  
    </div>
  )
}

export default DeliveryAddress
