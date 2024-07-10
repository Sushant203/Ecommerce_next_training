import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-gray-300 mt-20 pt-2 flex items-center justify-center'>
        <p>My Ecommerce &copy;</p>
        <section>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms and Conditions</Link>
        </section>
    </footer>
  )
}

export default Footer