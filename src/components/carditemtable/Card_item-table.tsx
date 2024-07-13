import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from '../ui/checkbox'
import cartItemData from "@/data/cart-items.json";
import { TCartitem } from '@/types/cartItem';
import Image from 'next/image';
import { getDiscountedPrice } from '@/utils/getDiscountedPrice';


type Props = {}

const CardItemTable = (props: Props) => {
  return (
    <div>
        <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className=""><Checkbox/></TableHead>
      <TableHead>Product</TableHead>
      <TableHead>price</TableHead>
      <TableHead>Quantity</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
   {
    (cartItemData as TCartitem[]).map((cartItem,index)=>{
        return(
             <TableRow key={cartItem.id}>
      <TableCell ><Checkbox />
</TableCell>
      <TableCell>
       <div className='flex'>
         <Image src={cartItem.product.imageURL[0]}
        alt={cartItem.product.name} height={60} width={60}/>
        <p className='line-clamp-1'>{cartItem.product.name}</p>
       </div>
      </TableCell>
      <TableCell>{getDiscountedPrice(cartItem.product.price,cartItem.product.discount)}</TableCell>
      <TableCell>{cartItem.quantity}</TableCell>
      <TableCell className="text-right">{cartItem.totalPrice}</TableCell>
    </TableRow>
        )
    })
   }
  </TableBody>
</Table>

    </div>
  )
}

export default CardItemTable