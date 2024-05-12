"use client";
import { useSupabase } from "@/lib/supabase/hooks/useSupabase";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import CategoryWiseProduct from "./shared/CategoryWiseProduct";

const HomePage = () => {
  const {
    mensProduct,
    getsMensClothing,
    womensProduct,
    getsWomensClothing,
    electronicsProduct,
    getsElectronics,
    jewleryProduct,
    getsJewelry,
  } = useSupabase();
  useEffect(() => {
    getsMensClothing();
    getsWomensClothing();
    getsElectronics();
    getsJewelry();
  }, [getsMensClothing,getsWomensClothing,getsElectronics,getsJewelry]);

  return (
    <div>
      <Image
        style={{
          maskImage: "linear-gradient(to bottom,rgba(0,0,0,1),rgba(0,0,0,0)",
        }}
        src={
          "https://images-eu.ssl-images-amazon.com/images/G/31/img24/AmazonPay/Travel/PC_Hero_BAU/IF_PC_Hero_3000x1200._CB583399235_.jpg"
        }
        alt={"amazon banner"}
        width={10000}
        height={1000}
      />
      <div className="w-[80%] mx-auto grid grid-cols-4 gap-2 relative -top-64">
        {mensProduct.map((product: any) => {
          return (
            <div  key={product.id}>
              <CategoryWiseProduct product={product} />
            </div>
          );
        })}

        {womensProduct.map((product: any) => {
          return (
            <div  key={product.id}>
              <CategoryWiseProduct product={product} />
            </div>
          );
        })}
        {electronicsProduct.map((product: any) => {
          return (
            <div  key={product.id}>
              <CategoryWiseProduct product={product} />
            </div>
          );
        })}

        {jewleryProduct.map((product: any) => {
          return (
            <div  key={product.id}>
              <CategoryWiseProduct product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
