import { useAppSelector } from '@/lib/supabase/hooks/redux'

import { supabase } from '@/lib/supabase/products'
import { getCart } from '@/redux/cartSlice'
import { loadStripe } from '@stripe/stripe-js'

import axios from 'axios'
import React from 'react'


const stripePromise = loadStripe("pk_test_51PFAoSSIJQ76osyRqn6KqWzZOipbK2X8ieQAw3bT6yDNpAHNlIhT9XKmzxzRzMk1UCFiXBwbBTKxY0u4MTs2wV7F00GiLp9Td4")

const OrderSummary = ({totalPrice}:{totalPrice:number}) => {
   const cart = useAppSelector(getCart)


  const createStripeSession = async()=>{
 
   const {data:{user}}= await supabase.auth.getUser();
   const stripe = await stripePromise;
   const checkoutSession =  await axios.post("/api/checkout-sessions",{
      items:cart,
      email:user?.email,
   })
   //redirect to checkout session
   const result = await stripe ?.redirectToCheckout({sessionId:checkoutSession.data.id,})
   if(result?.error){
      console.log(result.error.message);
   }
  }
  return (
    <div className='border border-gray-300 p-4  h-fit mt-5'>
 <div>
    <h1 className='font-bold text-xl mb-5'>Order summary</h1>
 <div className='text-xs mt-2 mb-2'>
    <div className='flex items-center justify-between'>
        <p>items</p>
        <p>$789</p>

 </div>
 <div className='flex items-center justify-between'>
        <p>Delivery:</p>
        <p>$10</p>

 </div>
 <div className='flex items-center justify-between'>
        <p>Total:</p>
        <p>$799</p>

 </div>
 <div className='flex items-center justify-between'>
        <p>Promotion Applied:</p>
        <p>$0</p>

 </div>
 <div className='flex justify-between font-bold text-xl text-[#B12704] border-t p-2 border-b mt-2 my-2 border-gray-400'>
    <h1>Order Total:</h1>
    <h1>${totalPrice}</h1>
    </div>
 
 <button onClick={createStripeSession} className='bg-[#FFD814] w-full rounded-md px-4 py-2 my-3'>Place your order now</button>
    </div>
    </div>
    </div>
  )
}

export default OrderSummary
