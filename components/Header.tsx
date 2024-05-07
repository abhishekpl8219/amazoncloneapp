import Image from "next/image";
import React from "react";
import amazonlogo from "../public/amazon-logo-2.webp";
import { BiCart } from "react-icons/bi";
import  {CgSearch} from "react-icons/cg"
import Link from "next/link";
const itemList = ["All","Fresh","Amazon mini tv" ,"Sell","Gift Cards","Baby","Buy again","Browsing History","Amazon pay","Gift ideas","Health Household and personal care"]
const Header = () => {
  return (
    <>
    <div className="bg-[#131921] text-white py-1">
      <div className="flex justify-between items-center w-[90%] mx-auto">
        <div className="w-[10%]
        ">
          <Image
            src={amazonlogo}
            alt={"amzon - logo"}
            width={150}
            height={150}
          />
        </div>
        <div className="w-[60%] border-white flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="rounded-l-md w-full  px-2 py-2 text-black"
          ></input>
          <div className="bg-[#FEBD69] p-2 text-black  rounded-r-md outline-none"> <CgSearch size={"24px"}/></div>
         
        </div>
        <div className="flex items-center justify-around w-[20%]">
          <div className="cursor-pointer">
            <h1 className="text-xs"> Hello, User</h1>
            <h1 className="font-medium text-sm">Account & Lists</h1>
          </div>
          <div>
            <p className="text-xs">Return</p>
            <h1 className="font-medium text-sm">& Orders</h1>
          </div>
          <div className="cursor-pointer">
            <p className="relative top-3 left-5">0</p>
            <div className="flex"> <div><BiCart size={"40px"}/></div><h1  className="mt-4">Cart</h1></div>
            
            
          </div>
        </div>
      </div>

    </div>
    <div className="bg-[#232F3E] w-full text-white p-2 flex justify-between items-center">
      <div> {itemList.map((link,idx) => {
           return(
            <Link href = {`/${link}`} className="mx-2 hover:border hover:border-white border border-transparent" key = {link}>
              {link}
            </Link>
           )
          })}</div>
         <div className="mr-5"><h1 className="text-[#FEBD69] font-semibold cursor-pointer hover:underline">Sign out</h1></div>
          
      </div>
    </>

  );
};

export default Header;