import React from 'react'
import rating from "../../public/star-icon.png";
import Image from 'next/image';
const Ratings = ({ratings}:{ratings:any}) => {
  ratings=JSON.parse(ratings);
 
  return (
    <div>
      <div className='flex items-center'>
        {
          Array(4).fill(1).map((dummyitem,index)=> <Image src= {rating} width={20} height={20} alt = "rating" key ={index} />)
     
          
          }
     <h1 className='text-[#007185] ml-2 font-medium'>{ratings.count} ratings</h1>
          
       
        </div>
    </div>
  )
}

export default Ratings
