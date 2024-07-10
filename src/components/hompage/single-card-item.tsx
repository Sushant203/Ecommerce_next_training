import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { Category } from '@/types/category'

type Props = {category:Category}

const SingleCategoryItem = ({category}: Props) => {
  return (
   <Card className='my-4'>
    <CardHeader>
        <Image src={category.imageURL} alt='category-image' height={100} width={100}/>
    </CardHeader>
    <CardContent>
        <h4 className='text-center'>{category.name}</h4>
    </CardContent>
   </Card>
  )
}

export default SingleCategoryItem