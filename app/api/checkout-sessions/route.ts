import { NextRequest, NextResponse } from "next/server";

const stripe=require ('stripe')("sk_test_51PFAoSSIJQ76osyR5v0RmEn0r3q1jYnWNdXGOV2ZMlrZXrUl47lHCId8CfLU3TvejeNlM7Ia3Sua8zKphrCzvzTE00mm32xbV1")
export async function POST(req:NextRequest,res:NextResponse){
    
    const body = await req.json();
    const {items,email}=body;
    const orangedItems =  items.map((item:any)=>({
        price_data:{
            currency:'inr',
            product_data:{
                name:item.title,
                images:[item.image]
            },
            unit_amount: Math.floor(item.price*79),
        },
        quantity:1
    }))
    const session = await stripe.checkout.sessions.create({
        payment_method_types:['card'],
        shipping_address_collection:{
            allowed_countries:['GB','US','CA']
        },
        line_items:orangedItems,
        mode:'payment',
        success_url:`${process.env.HOST}/success`,
        cancel_url:`${process.env.HOST}/checkout`,
        metadata:{
            email,
            images: JSON.stringify(items.map((item:any)=>{
              item.image
            })
     ) }
    })
    return NextResponse.json({
        id:session.id,
    })

}