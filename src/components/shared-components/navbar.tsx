"use client";
import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"
import { IoCartOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input"
import { signIn, signOut } from 'next-auth/react';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className=' container flex items-center justify-between gap-10 py-3 border-b bg-orange-500 text-slate-50 shadow-md shadow-slate-200 rounded-sm'>
        <section className='text-2xl font-bold'>
            logo
        </section>
        <ul className='text-lg flex items-center gap-5'>
            <li>
                <Link href={'/'}>Home</Link>
                </li>
                <li>
                <Link href={'/products'}>Product</Link>
                </li>
                <li>
                <Link href={'/contact'}>Contact</Link>
            </li>
        </ul>

       <section className='flex gap-20'>
         <section>
            <Input className='border rounded-lg px-3 py-2 min-w-[300 px]' placeholder='search'/>
        </section>
       </section>
        <section className='flex items-center space-x-4'>
          <Button asChild>
            <Link href={'/login'}>Login</Link></Button>
          {/* <Button onClick={()=> signOut()}>
           LogOut</Button> */}
      <Button asChild>
        <Link href={'/customer/cart'}> <IoCartOutline  size={20} /></Link></Button>
    
          
            
        </section>
    </nav>
  )
}

export default Navbar