import React from 'react'
import ProductList from './product-list'

type Props = {}

const ProductWrapper = (props: Props) => {
  return (
    <div className='container space-y-5'>
      <h3 className='capitalize font-semibold text-2xl'>Our latest products</h3>
        <ProductList/>
    </div>
  )
}

export default ProductWrapper