import React from 'react'
import CategoriesList from './categorieslist';

type Props = {}

const CategoriesWrapper = (props: Props) => {
  return (
    <div className='container py-20'>
        <h2 className=''>Categories</h2>
        <CategoriesList/>
    </div>
  )
}
export default CategoriesWrapper;