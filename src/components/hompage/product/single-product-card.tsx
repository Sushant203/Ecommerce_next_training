import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { IProduct } from '@/types/product'
import { getDiscountedPrice } from '@/utils/getDiscountedPrice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


type Props = {product:IProduct,
  // variant?: 'variant1'| 'variant2'| 'variant3'
}

const SingleProductCard = ({ product }: Props) => {
  const discountPrice= getDiscountedPrice(product.price,product.discount)
  return (
 <Link href={`/products/${product.id}`}>  <Card title={product.name} className='container rounded-lg hover:shadow-lg transition-all'>
        <CardHeader className='border p-0'>
    <Image src={product.imageURL[1]} alt={product.name} height={200} width={100} className='w-full object-cover max-h-40 rounded-md ' />
    <figcaption className='sr-only'>{product.name}</figcaption>
        </CardHeader>
        <CardTitle className='p-2 text-lg font-medium line-clamp-2'>
            {product.name}
        </CardTitle>
        <CardContent className='p-2'>
           <p>{product.model}</p> 
           <p> {product.stockQuantity}</p> 
           <p className='text-orange-300'>Rs. {discountPrice}</p> 
           <p className='line-through text-muted-foreground'>{product.price} </p>
            <span>{product.discount}%</span>
           <section>

           </section>
        </CardContent>
    </Card>
    </Link> 
  )
}

// function CardVariant1(){
//   return<></>
  
// }
// function CardVariant2(){
// return<></>
// }
// function CardVariant3(){
// return<></>
// }
export default SingleProductCard