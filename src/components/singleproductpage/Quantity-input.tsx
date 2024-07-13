'use client';
import React, { useCallback } from 'react'
import { Button } from '../ui/button';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { IProduct } from '@/types/product';
import { cursorTo } from 'readline';
//import { IProduct } from '@/types/product';
type Props={
 stockQuantity: number
}
export const Selected_Quantity='quantity';

const QuantityInput = ({stockQuantity}:Props) => {
    const searchParams = useSearchParams()
    const router = useRouter()
  const pathname = usePathname()
    console.log(searchParams.get(Selected_Quantity));
    // const search = searchParams.get('search')
    const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )
    const handleQuantityUpdate=(e:React.ChangeEvent<HTMLInputElement>)=>{
      const Maxnumber= Math.max(1,Math.min(stockQuantity,Number(e.target.value)));
       router.push(pathname + '?' + createQueryString(Selected_Quantity, Maxnumber.toString()))
        
    }
    const quantityUpdate=(newQuantity:number)=>{
      router.push(pathname + '?'+ createQueryString(Selected_Quantity,newQuantity.toString()))
    }
    const Current_Quantity= Number(searchParams.get(Selected_Quantity?? 1));
  return (
   <section className='mt-5'>
                    <p className='mb-2'>Quantity</p>
                    <div>
                        <Button variant={'outline'} size={'icon'}
                        onClick={()=>{if(Current_Quantity>1){
                          quantityUpdate(Current_Quantity-1)}
                        }} className={`${Current_Quantity===1 && "cursor-not-allowed"}`}>
                        <FaMinus/>
                        </Button>
                        <input type='number'min={1} max={5} step={1} className='focus:outline-none px-3 py-2 w-[4ch] text-center rounded-md' value={searchParams.get(Selected_Quantity) ?? 1
                            
                        }
                        onChange={handleQuantityUpdate}/>
                         <Button variant={'outline'} size={'icon'}
                         onClick={()=>{if(Current_Quantity<stockQuantity){
                          quantityUpdate(Current_Quantity+1)}}} className={` ${stockQuantity<=Current_Quantity && "cursor-not-allowed"}`}>
                        <FaPlus/>
                        
                        </Button>
                    </div>
                </section>
  )
}

export default QuantityInput