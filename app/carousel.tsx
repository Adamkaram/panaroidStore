"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
// import "animate.css"; // Import animate.css styles
import Image from "next/image";
import { type CarouselApi } from "@/components/ui/carousel";
import AutoScroll from 'embla-carousel-auto-scroll'


const  Fastcarousel = () => {
    
    const [api, setApi] = React.useState<CarouselApi>();


    return (
        <div className="-ml-20">
            <Carousel
               
      setApi={setApi /* Set the carousel API when it's ready */}
      orientation="vertical"
      opts={{
        
        loop: true,
        
      }}
      plugins={[AutoScroll()]}>
      <CarouselContent className=" h-[900px] ">
        {Array.from({ length: 14 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="  -my-2 -py-24 md:w-[100%] basis-1/5">
            <div>
              <CardContent
                className="flex items-end justify-end ">
                <Image
                  src="/Header/card-front.webp"
                  width={220}
                  height={153}
                  alt="Picture of the author"
                />
              </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
        </div>
    )
}
export default Fastcarousel;