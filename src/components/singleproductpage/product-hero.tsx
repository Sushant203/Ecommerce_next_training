import { IProduct } from '@/types/product'
import { getDiscountedPrice } from '@/utils/getDiscountedPrice'
import Image from 'next/image'
import React from 'react'
import RatingStar from '../shared-components/rating-star'
import { Button } from '../ui/button'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import QuantityInput from './Quantity-input'

type Props = {
    product: IProduct
}

export default function SingleProductHero({ product }: Props) {

    const primaryImage = product.imageURL[0]
    const discountPrice = getDiscountedPrice(product.price, product.discount)

    return (
        <main className=' container grid grid-cols-3 gap-10 mt-20 bg-slate-200 rounded-md py-2'>
            <section className='rounded-md bg-slate-100'>
                <figure>
                    <Image
                        src={primaryImage}
                        alt={product.name}
                        height={200}
                        width={450}
                        className='max-w-full max-h-[300px] x rounded-md'
                    />
                    <figcaption className='sr-only'>{product.name}</figcaption>
                </figure>

                <section className='flex gap-2 mt-2'>
                    {
                        product.imageURL.map((imageUrl, ind) => (
                            <figure key={ind}>
                                <Image
                                    src={imageUrl}
                                    alt={product.name}
                                    height={60}
                                    width={60}
                                    className='rounded-md max-w-[100px] max-h-[100px] object-cover'
                                />
                                <figcaption className='sr-only'>{product.name}</figcaption>
                            </figure>
                        ))
                    }
                </section>
            </section>

            <section>
                <h1 className='text-3xl font-sans'>{product.name}</h1>
                <h1 className='text-2xl font-sans'>{product.description}</h1>
                    <section>
                    
                    </section>
                <div className='mt-10'>
                    <p className='text-2xl text-orange-500 font-semibold'>Rs. {discountPrice}</p>
                    <div className='flex gap-2'>
                        <p className='text-sm text-muted-foreground line-through'>Rs. {product.price}</p>
                        <span className='text-sm'>{product.discount}%</span>
                    </div>
                </div>
            
                <section className='flex gap-3'>
                    <RatingStar rating={product.avgRating} />
                    <span className='text-orange-500'>{product.avgRating} ratings</span>
                    <span className='text-muted-foreground '>{product.reviews.length}</span>
                </section>
                <QuantityInput />
                <section></section>
            </section>
        </main>
    )
}