import CardItemTable from '@/components/carditemtable/Card_item-table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { Separator } from "@/components/ui/separator"
import { Button } from '@/components/ui/button'

type Props = {}

const CartPage = (props: Props) => {
  return (
    <main className='container py-10'>
        <header className='flex items-center justify-center flex-col gap-1'> 
            <h2 className='text-4xl font-semibold'>Cart</h2>
            <p className='text-muted-foreground'>A lsit of your items</p>
        </header>
        <section className='grid grid-cols-3 gap-10'>
        <section className='col-span-2'>
        <CardItemTable/>
        </section>
        <section>
            <OrderSummary/>
        </section>
        </section>
    </main>
  )
}

function OrderSummary(){
    return(
    <Card>
        <CardHeader>
            <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent className='space-y-3'>
            <section className='flex items-center justify-center'>
                <h4>sub-total</h4>
                <span>Rs. 500</span>
            </section>
            <Separator />

            <section className='flex items-center justify-between gap-5'>
                <h4>Delivery Fee</h4>
                <span>Rs. 110</span>
            </section>
            <Separator />

            <section className='flex items-center justify-between gap-5'>
                <h4>Total</h4>
                <span>Rs. 610</span>
            </section>
            <section>
                <Button className='uppercase w-full p-2'>Proceed to checkout</Button>
            </section>
        </CardContent>
            
    </Card>
    )
}
export default CartPage