import { IProduct } from '@/types/product'
import React from 'react'

type Props = {
    product: Pick<IProduct,'description'>
}

const ProductDescription = ({product}: Props) => {
  return (
    <section className='container'>
    <p className='leading-7'>{product.description}</p>
    </section>
  )
}

export default ProductDescription