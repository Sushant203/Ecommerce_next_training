import React from 'react'
import productData from "@/data/products.json";
import SingleProductCard from './single-product-card';
import { IProduct } from '@/types/product';
type Props = {}

const ProductList = (props: Props) => {
  return (
    <section className='grid grid-cols-5 gap-5 mt-5'>
        {
            (productData as IProduct[]).map((product,i)=>{
                
                return <div key={i}>
                    <SingleProductCard product={product}/>
                </div>
            })
        }
    </section>
  )
}

export default ProductList