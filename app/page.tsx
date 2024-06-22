// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//         <h1>v0 in progress</h1>
//       </div>
//     </main>
//   );
// }
// "use client"
// import { Virtual } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/virtual';

// export default () => {
//   // Create array with 1000 slides
//   const slides = Array.from({ length: 12 }).map(
//     (el, index) => `Slide ${index + 1}`
//   );

//   return (
//     <Swiper spaceBetween={1} slidesPerView={3}  direction={'vertical'}>
//       {slides.map((slideContent, index) => (
//         <SwiperSlide key={slideContent} >
//           {slideContent}
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// import React, { useEffect, useState, useRef } from 'react';
// import Image from 'next/image';

// export default () => {
//   const [progress, setProgress] = useState(50);
//   const [startX, setStartX] = useState(0);
//   const [isDown, setIsDown] = useState(false);
//   const [active, setActive] = useState(0);
//   const carouselRef = useRef(null);
//   const cursorsRef = useRef([]);

//   const speedWheel = 0.02;
//   const speedDrag = -0.1;

//   const getZindex = (array, index) =>
//     array.map((_, i) =>
//       index === i ? array.length : array.length - Math.abs(index - i)
//     );

//   const displayItems = (items, active) => {
//     items.forEach((item, index) => {
//       const zIndex = getZindex([...items], active)[index];
//       item.style.setProperty('--zIndex', zIndex);
//       item.style.setProperty('--active', (index - active) / items.length);
//     });
//   };

//   const animate = () => {
//     const boundedProgress = Math.max(0, Math.min(progress, 100));
//     const newActive = Math.floor((boundedProgress / 100) * (carouselRef.current.children.length - 1));
//     setActive(newActive);

//     displayItems([...carouselRef.current.children], newActive);
//   };

//   const handleWheel = (e) => {
//     const wheelProgress = e.deltaY * speedWheel;
//     setProgress((prev) => prev + wheelProgress);
//   };

//   const handleMouseMove = (e) => {
//     cursorsRef.current.forEach((cursor) => {
//       cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//     });

//     if (!isDown) return;

//     const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
//     const mouseProgress = (x - startX) * speedDrag;
//     setProgress((prev) => prev + mouseProgress);
//     setStartX(x);
//   };

//   const handleMouseDown = (e) => {
//     setIsDown(true);
//     setStartX(e.clientX || (e.touches && e.touches[0].clientX) || 0);
//   };

//   const handleMouseUp = () => {
//     setIsDown(false);
//   };

//   useEffect(() => {
//     animate();
//   }, [progress]);

//   useEffect(() => {
//     document.addEventListener('mousewheel', handleWheel);
//     document.addEventListener('mousedown', handleMouseDown);
//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseup', handleMouseUp);
//     document.addEventListener('touchstart', handleMouseDown);
//     document.addEventListener('touchmove', handleMouseMove);
//     document.addEventListener('touchend', handleMouseUp);

//     return () => {
//       document.removeEventListener('mousewheel', handleWheel);
//       document.removeEventListener('mousedown', handleMouseDown);
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseup', handleMouseUp);
//       document.removeEventListener('touchstart', handleMouseDown);
//       document.removeEventListener('touchmove', handleMouseMove);
//       document.removeEventListener('touchend', handleMouseUp);
//     };
//   }, [startX, isDown]);

//   return (
//     <>
//       <div className="carousel" ref={carouselRef}>
//         {[
//           { title: 'Forget OuR Job', num: '01', imgSrc: '/Header/p-logo.jpg' },
//           { title: 'OuR', num: '02', imgSrc: '/Header/card-front.webp' },
//           { title: 'Job', num: '03', imgSrc: '/Header/store.jpg' },
//           { title: 'Focus ON Yours', num: '04', imgSrc: 'https://media.istockphoto.com/id/904390980/it/foto/foto-di-architettura-contemporanea-astratta.jpg?s=612x612&w=0&k=20&c=_P4Wmx5nq5MeDuimpNklKCBlrLovmCyd9lfiMKeJZDs=' },
//           { title: 'Yours', num: '05', imgSrc: 'https://media.istockphoto.com/id/130408311/it/foto/piscina-allesterno-della-casa-moderna-al-crepuscolo.jpg?s=612x612&w=0&k=20&c=ZoVjx7uDjoHKmpM1ayW6UR1SQOoYh_xx-QMG_qeOYs0=' },
//           { title: 'Create', num: '06', imgSrc: 'https://media.istockphoto.com/id/1299954175/it/foto/villa-cubica-moderna.jpg?s=612x612&w=0&k=20&c=DhGhb3c1E3DW_fbrWJ_R_Zh0Lbwu6syFeRLsKlZ9no8=' },
//           { title: 'happiness', num: '07', imgSrc: '/Header/happines.jpg' },
//           { title: 'With', num: '08', imgSrc: 'https://media.istockphoto.com/id/1191376167/it/foto/villa-dellisola.jpg?s=612x612&w=0&k=20&c=PKslWo4FdbjinohKQlK_oWL34jqAsnzMTdy2bxEAf-I=' },
//           { title: 'US', num: '09', imgSrc: 'https://media.istockphoto.com/id/184316397/it/foto/londra-edifici-aziendali.jpg?s=612x612&w=0&k=20&c=XqrRxEPzFnwRFk7PQrCiu9-FPfCTPyMe5BKKaxYXCs8=' },
//           { title: 'Panaroid', num: '10', imgSrc: '/Header/p-logo.jpg' }
//         ].map((item, index) => (
//           <div
//             key={index}
//             className="carousel-item"
//             onClick={() => {
//               setProgress((index / carouselRef.current.children.length) * 100 + 10);
//             }}
//           >
//             <div className="carousel-box">
//               <div className="title">{item.title}</div>
//               {/* <div className="num">{item.num}</div> */}
//               <Image src={item.imgSrc} alt={item.title} fill cover />
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="layout">
//         <div className="box">
//           High-end, full-service<br />visual content creation<br />for lifestyle branding.
//         </div>
//       </div>

//       <a href="https://www.supah.it" target="_blank" className="logo">P</a>

//       <div className="cursor cursor1" ref={(el) => (cursorsRef.current[0] = el)}></div>
//       <div className="cursor cursor2" ref={(el) => (cursorsRef.current[1] = el)}></div>
//     </>
//   );
// };

"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
// import "animate.css"; // Import animate.css styles
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { type CarouselApi } from "@/components/ui/carousel";
import Fastcarousel from './carousel'

import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel'

const TWEEN_FACTOR_BASE = 0.22

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

export default () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])



  const updateSelectedIndex = useCallback((api: any) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  const setTweenNodes = useCallback((api: EmblaCarouselType): void => {
    tweenNodes.current = api.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla_slue') as HTMLElement
    })
  }, [])

  const setTweenFactor = useCallback((api: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length
  }, [])

  const tweenScale = useCallback(
    (api: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = api.internalEngine()
      const scrollProgress = api.scrollProgress()
      const slidesInView = api.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      api.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const scale = numberWithinRange(tweenValue, 0, 1).toString()
          const tweenNode = tweenNodes.current[slideIndex]
          tweenNode.style.transform = `scale(${scale})`
        })
      })
    },
    []
  )
  
  useEffect(() => {
    if (!api) return;

    updateSelectedIndex(api); // Update index on mount
    setTweenNodes(api)
    setTweenFactor(api)
    tweenScale(api)
    api
      .on("select", updateSelectedIndex) // Update index when it changes: https://www.embla-carousel.com/api/events/#select
      .on("reInit", updateSelectedIndex)
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
      ; // Update index when the carousel re-mounts: https://www.embla-carousel.com/api/events/#reinit
  }, [api , tweenScale]);

  return (

    <div className="grid grid-cols-3">
    
      <div className="flex justify-center text-gray-100	 text-xl	 title">
      <h1>this website under developing tag</h1>
      </div>
      
      <div className="flex justify-end">
        <Carousel
      setApi={setApi }
      orientation="vertical"
      opts={{
        align: "center",
        loop: true,
        skipSnaps: false,
      }}
      plugins={[Autoplay({ delay: 1900 })]}>
      <CarouselContent className=" h-[900px] ">
        {Array.from({ length: 14 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="embla_slue -m-5 -p-24 md:w-[100%] basis-1/5">
            <div  className="embla_slue">
              <CardContent
                className={` 
               flex items-center justify-center  z-0 		
            
                 ${selectedIndex === index  ? " " : ""}
               
                `}>
                <Image
               
                  src="/Header/card-front.webp"
                  width={310}
                  height={210}
                  alt="Picture of the author"
                />
              </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    </div>
    <div  className="flex justify-end">
    <Fastcarousel />
    </div>
      </div>
      );
};
