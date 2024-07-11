import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke,FaRegStar } from "react-icons/fa6";
type Props = {rating: number}
const Total_Star_Count= 5;
const RatingStar = ({rating}: Props) => {
    const fullStarLength= Math.floor(rating) //4
    const emptyStarLength= Total_Star_Count- Math.ceil(rating);
    const halfStarLength= Total_Star_Count-fullStarLength-emptyStarLength;
  return (
    <div className='flex items-center gap-1'>
    {
        new Array(fullStarLength).fill('_').map((_,index) =><FaStar key={index} className='text-orange-500'/>)
    }
    {
        new Array(halfStarLength).fill('_').map((_,index) =><FaStarHalfStroke key={index} className='text-orange-500'/>)
    }
    {
        new Array(emptyStarLength).fill('_').map((_,index) =><FaRegStar key={index} className='text-orange-500'/>)
    }
    </div>
  )
}

export default RatingStar