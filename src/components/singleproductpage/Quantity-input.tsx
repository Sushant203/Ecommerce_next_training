'use client';
import React, { useCallback } from 'react'
import { Button } from '../ui/button';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const Selected_Quantity='quantity';

const QuantityInput = () => {
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
       router.push(pathname + '?' + createQueryString(Selected_Quantity, e.target.value))
        
    }
  return (
   <section className='mt-5'>
                    <p className='mb-2'>Quantity</p>
                    <div>
                        <Button variant={'outline'} size={'icon'}>
                        <FaMinus/>
                        </Button>
                        <input type='number'min={1} max={5} step={1} className='focus:outline-none px-3 py-2 w-[4ch] text-center rounded-md' value={searchParams.get(Selected_Quantity) ?? 1
                            
                        }
                        onChange={handleQuantityUpdate}/>
                         <Button variant={'outline'} size={'icon'}>
                        <FaPlus/>
                        
                        </Button>
                    </div>
                </section>
  )
}

export default QuantityInput