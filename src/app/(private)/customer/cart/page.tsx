import CardItemTable from '@/components/carditemtable/Card_item-table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { Separator } from "@/components/ui/separator"

type Props = {}

const CartPage = (props: Props) => {
  return (
    <main className='container py-10'>
        <header className='flex items-center justify-center'> 
            <h2 className='text-4xl font-semibold'>Cart</h2>
            <p className='text-muted-foreground'>A lsit of your items</p>
        </header>
        <section className='col-span-2'>
        <CardItemTable/>
        </section>
        <section>
            <OrderSummary/>
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

            <section>
                <h4>Delivery Fee</h4>
                <span>Rs. 110</span>
            </section>
            <Separator />

            <section>
                <h4>Total</h4>
                <span>Rs. 610</span>
            </section>
        </CardContent>
            
    </Card>
    )
}
export default CartPage