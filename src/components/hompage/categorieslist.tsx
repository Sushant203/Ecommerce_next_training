import React from 'react'
import categoryData from "@/data/catagories.json";
import { Category } from '@/types/category';
import Image from 'next/image';
import SingleCategoryItem from './single-card-item';
type Props = {}

const CategoriesList = (props: Props) => {
  return (
    <section className='grid grid-cols-6 gap-5 mt-5'>
        {
            (categoryData as Category[]).map((category,i)=>{
                return(
                <div key={i}>
                    <SingleCategoryItem category={category}/>
                </div>
               
             ) })
        }
    </section>
  )
}

export default CategoriesList