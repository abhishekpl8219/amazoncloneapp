"use client";
import Image from "next/image";
import React from "react";
import amazonlogo from "../public/amazon-logo.png";
import { FaLock } from "react-icons/fa";
import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart } from "@/redux/cartSlice";
import OrderSummary from "./OrderSummary";
import DeliveryAddress from "./DeliveryAddress";

const Checkout = () => {
  const cart = useAppSelector(getCart);
  return (
    <>
      <div className="absolute top-0 w-full p-9 bg-white  ">
      <div className="flex justify-between items-center mx-auto w-[70%] border-b border-gray-300 ">
          <div>
            <Image
              src={amazonlogo}
              height={150}
              width={150}
              alt={"amazon-logo"}
            />
          </div>
          <div>
            <h1 className="font-bold text-2xl">Checkout</h1>
          </div>
          <div className="text-gray-400">
            <FaLock size={"30px"} />
          </div>
        </div>
        <div className="flex justify-between w-[70%] mx-auto">
          
          <DeliveryAddress />
          <OrderSummary />
        </div>
      </div>
    </>
  );
};

export default Checkout;
