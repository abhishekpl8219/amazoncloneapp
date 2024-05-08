import { useState } from "react"
import { supabase } from "../products";

export const useSupabase  =  () => {
    const [products,setProducts]= useState<any>([]);
    const [filteredData,setFilteredData]= useState<any>([]);
    const [singleProduct,setSingleProduct]=useState<any>([]);
    const getDataFromSupabase = async()=>{
        let {data,error}= await supabase.from('Products').select("*");
        if(data){
            setProducts(data);
            console.log(data);
    
        }
        if (error){
            console.log(error);
        }
    }
    const getFilteredData = async(query:string)=>{
        let {data, error} = await supabase.from('Products').select("*").or(`title.ilike.%${query}%, description.ilike.%${query}%, category.ilike.%${query}%`); 
        if(data){
            setFilteredData(data);
            console.log("value of data",data);
    
        }
        if (error){
            console.log(error);
        }
    }

    const getSingleProduct = async(id:number)=>{
        let {data,error}=  await supabase.from('Products').select("*").eq('id',id);
        if(data){
            setSingleProduct(data);
           
        }
        if (error){
            console.log(error);
        }

    }
    return {products,getDataFromSupabase,filteredData,getFilteredData,singleProduct,getSingleProduct};

}