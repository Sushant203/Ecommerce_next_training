import { IProduct } from '@/types/product'
import React from 'react'
import RatingStar from '../shared-components/rating-star'

type Props = {
    product: Pick<IProduct,'reviews'>
}

const ProductReviews = ({product}: Props) => {
  return (
  <section className='mt-12 container'>
    <h3 className='text-2xl font-bold'>Product Reviews</h3>
    <div>
        {product.reviews?.length>0?(
            <ReviewList product={product}/>
        ):(
            <p>This product has no reviews.</p>
        )}
    </div>
  </section>
  )
}

function ReviewList({product:{reviews}}:{product: Pick<IProduct,'reviews'>}){
return(
 <section className='mt-12 container'>
    <h3 className='text-2xl font-bold'>Product Reviews</h3>
    {
        reviews.map((review,index)=> {
            return(
                <section key={index} className='py-5 broder-b'>
                    <h4 className='capitalize text-xl'>{review.username}</h4>
                    <div className='flex'>
                    <RatingStar rating={review.rating}/>
                    <span>({review.rating})</span>
                    </div>
                    <p>{review.message}</p>
                </section>
            )
        })
    }
   </section>
)
}

export default ProductReviews