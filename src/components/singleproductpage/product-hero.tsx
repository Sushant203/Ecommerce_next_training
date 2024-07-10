import { IProduct } from '@/types/product'
import { getDiscountedPrice } from '@/utils/getDiscountedPrice'
import Image from 'next/image'
import React from 'react'

type Props = {
    product: IProduct
}

const SingleProductHero = ({product}: Props) => {
    const primaryImage= product.imageURL[0];
    const discountPrice= getDiscountedPrice(product.price,product.discount);
  return (
    <main className='grid grid-cols-3 gap-1 '>
        <section >
            <figure>
            <Image 
            src={primaryImage}
            alt={product.name}
            height={400}
            width={400}
            className='max-w-full max-h-[300 px] object-cover'
            />
            <figcaption className='sr-only'>{product.name}</figcaption>
        </figure>
        <section className='flex gap-2 mt-2'>
                {
                    product.imageURL.map((imageURL,index)=>(
                        <figure key={index}>
                        <Image 
            src={imageURL}
            alt={product.name}
            height={100}
            width={100}
            className='max-w-[100 px] max-h-[100 px] object-cover rounded-md'
            />
            <figcaption className='sr-only'>{product.name}</figcaption>
                    </figure>
                ))
            }
            </section>
        </section>
        <section>
            <h1 className='font-bold text-3xl'>{product.name}</h1>
            <p className='text-orange-500'>Rs. {discountPrice}</p>
            <div className='flex gap-4 text-sm'>
                <p className='text-muted-foreground line-through'>Rs. {product.price}</p>
            <span>{product.discount} %</span>
            </div>
            <p></p>
            <p></p>
            <p></p>
        </section>
    </main>
  )
}

export default SingleProductHero