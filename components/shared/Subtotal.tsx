import React from 'react'

const Subtotal = ({length,totalPrice,left}:{length:number,totalPrice:number,left:boolean}) => {

  return (
    
    <div>
      <h1 className={`${left?'text-left text-bold':' text-bold text-right'}`}>{`Subtotal (${length}  items)  TotalPrice=$${totalPrice}`}</h1>
    </div>
  )
}

export default Subtotal
