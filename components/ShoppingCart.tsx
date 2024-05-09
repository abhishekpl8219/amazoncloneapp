"use client";
import { useAppDispatch, useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart, removeFromTheCart } from "@/redux/cartSlice";
import Image from "next/image";
import React from "react";

const ShoppingCart = () => {
  const cart = useAppSelector(getCart);
  const dispatch=useAppDispatch();
  return (
    <div className="">
      <div className="flex justify-between items-center  border-b border-gray-300 py-5">
        <h1 className="font-bold text-2xl"> Shopping Cart</h1>
        <p className="font-medium">Price</p>
      </div>

      {cart.map((product: any, index) => {
        return (
          <div key={product.id} className="mt-4 flex justify-between">
            <div className="flex">
              <div>
                <Image
                  src={product.image}
                  width={100}
                  height={100}
                  alt={product}
                />
              </div>
              <div>
                <h1 className="font-medium ml-2">{product.title}</h1>
                <p className=" ml-2 text-[#007600] m-2 text-xs font-bold">
                  In Stock
                </p>
                <h1 className=" ml-2 font-bold text-red-600 cursor-pointer mb-2" onClick={()=>{dispatch(removeFromTheCart(product.id))}}>
                  REMOVE
                </h1>
                <div className="ml-2 flex items-center bg-gray-200 rounded-md  px-5 py-1 w-fit text-xl font-medium gap-2 justify-between">
                  <div className="cursor-pointer mr-4">-</div>
                  <div>0</div>
                  <div className="cursor-pointer ml-4">+</div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-xl">{`$${product.price}`}</h1>
              <p className="text-xs py-1">
                M.R.P<span className="line-through">3,995.00</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShoppingCart;
