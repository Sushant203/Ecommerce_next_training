"use client";
import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import categoryData from "@/data/catagories.json";
import { Category } from '@/types/category';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image';

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className='container py-10'>
         <Carousel
      plugins={[
        Autoplay({
          delay: 2000, stopOnInteraction: true
        }),
      ]}
      className=''
    >
    <CarouselContent>
        {(categoryData as Category[]).map((category,index)=>(
            <CarouselItem key={index} className="">
                <Card className='bg-slate-500'>
                     <CardContent className="flex aspect-video items-center justify-center p-6">
                  <Image src={category.imageURL} alt='images' height={0} width={0} sizes='100vw' className='object-contain h-full w-full' />
                </CardContent>
                </Card>

            </CarouselItem>
        ))}
    </CarouselContent>
    <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </section>
  )
}

export default Hero