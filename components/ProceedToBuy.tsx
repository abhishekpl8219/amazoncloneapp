
import React from 'react'
import Subtotal from './shared/Subtotal'

const ProceedToBuy = ({cart,totalPrice}:{cart:any,totalPrice:number}) => {
  return (
    <div className='w-[20%]  ml-4 h-fit border border-gray-300'>
     <div className='p-4 text-sm'>
        <p><span className='text-[#007600] font-medium'>Your order is eligble for FREE Delivery.
            </span> Choose FREE Delivery option at checkout</p>
        <Subtotal length = {cart.length} totalPrice={totalPrice} left = {true}/>
        <button className='bg-[#FFD814] w-full py-1  my-3 rounded-md'>Proceed to Buy</button>
        </div>
    </div>
  )
}

export default ProceedToBuy
