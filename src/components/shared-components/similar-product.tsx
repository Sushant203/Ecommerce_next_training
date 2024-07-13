import React from 'react'
import ProductWrapper from '../hompage/product/product-wrapper'

type Props = {}

const SimilarProduct = (props: Props) => {
  return (
    <section className='container'>
        <h3 className='font-medium text-2xl mb-5 capitalize'>you may also like this</h3>
        <ProductWrapper/>
    </section>
  )
}

export default SimilarProduct