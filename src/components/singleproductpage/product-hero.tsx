import { IProduct } from '@/types/product'
import { getDiscountedPrice } from '@/utils/getDiscountedPrice'
import Image from 'next/image'
import React from 'react'

type Props = {
    product: IProduct
}

export default function SingleProductHero({ product }: Props) {

    const primaryImage = product.imageURL[0]
    const discountPrice = getDiscountedPrice(product.price, product.discount)

    return (
        <main className='grid grid-cols-2 gap-10 mt-20'>
            <section>
                <figure>
                    <Image
                        src={primaryImage}
                        alt={product.name}
                        height={500}
                        width={500}
                        className='max-w-full max-h-[400px] object-cover rounded-md'
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
                                    height={100}
                                    width={100}
                                    className='rounded-md max-w-[100px] max-h-[100px] object-cover'
                                />
                                <figcaption className='sr-only'>{product.name}</figcaption>
                            </figure>
                        ))
                    }
                </section>
            </section>

            <section>
                <h1 className='text-3xl font-bold'>{product.name}</h1>

                <div className='mt-10'>
                    <p className='text-2xl text-orange-500 font-semibold'>Rs. {discountPrice}</p>
                    <div className='flex gap-2'>
                        <p className='text-sm text-muted-foreground line-through'>Rs. {product.price}</p>
                        <span className='text-sm'>{product.discount}%</span>
                    </div>
                </div>
            </section>
        </main>
    )
}