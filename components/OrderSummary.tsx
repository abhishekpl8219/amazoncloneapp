import React from 'react'

const OrderSummary = () => {
  return (
    <div className='border border-gray-300 p-4  h-fit mt-5'>
 <div>
    <h1 className='font-bold'>Order summary</h1>
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
    <h1>$799</h1>
    </div>
 
 <button className='bg-[#FFD814] w-full rounded-md px-4 py-2 my-3'>Place your order now</button>
    </div>
    </div>
    </div>
  )
}

export default OrderSummary
