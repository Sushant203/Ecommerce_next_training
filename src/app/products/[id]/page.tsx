import React from 'react'
import productData from "@/data/products.json";
import { notFound } from 'next/navigation';
import { IProduct } from '@/types/product';
import SingleProductHero from '@/components/singleproductpage/product-hero';

type Props = {
    params:{
        id: string;
    },
    // searchParams:{
    // query: string;
    // page: string;
    // }
}

const SingleProductPage = ({params:{id}}: Props) => {
    const product= (productData as IProduct[]).find(singleProduct => singleProduct.id === id)
    //if product xaina vani error 404 not found garnu
    if(product=== undefined)notFound()

  return (
   <section className=''>
    <SingleProductHero product={product}/>
   </section>
  )
}

export default SingleProductPage