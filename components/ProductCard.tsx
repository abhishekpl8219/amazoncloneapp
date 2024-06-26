import React from "react";
import Image from "next/image";
import Ratings from "./shared/Ratings";
import { useRouter } from "next/navigation";
const ProductCard = ({ product }: { product: any }) => {
  const router = useRouter();
  return (
    <div>
      <div>
        <div className="bg-gray-100  flex items-center justify-center rounded-md h-[250px] cursor-pointer" onClick={()=>{
          router.push(`/product/${product.id}`)
        }}>
        <Image className="mix-blend-multiply p-8"
          src={product.image}
          alt={product.title}
          width={200}
          height={300}
        />
        </div>

        <h1 className="font-bold">{product.title}</h1>
        <p>{product.description.substring(0,40)}...</p>
       
        <p className="font-bold text-2xl">{`$${product.price}`}</p>
      </div>
      <Ratings ratings={product.rating}/>
    </div>
  );
};

export default ProductCard;
