'use client';

import { useKeenSlider } from 'keen-slider/react';
import leftIcon from '~/public/icons/arrow-left.svg';
import 'keen-slider/keen-slider.min.css';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useRooms } from '../context/rooms-context';
import { motion } from 'framer-motion';
import PageWrapper from './[category]/[product]/components/page-wrapper/page-wrapper';
const FurniturePage = () => {
   const { loading } = useRooms();

   const [roomData, setRoomData] = useState<any>(null);
   const [fetching, setFetching] = useState(true);
   const [errorFetching, setErrorFetching] = useState(false);
   const { room } = useParams();
   useEffect(() => {
      const fetchRoomData = async () => {
         try {
            const res = await fetch(`/api/rooms/${room}`);
            if (!res.ok) {
               setErrorFetching(true);
               return;
            }
            const data = await res.json();
            setRoomData(data.roomData);
         } catch (error) {
            setErrorFetching(true);
         } finally {
            setFetching(false);
         }
      };
      (async () => {
         await fetchRoomData();
      })();
   }, [room]);
   const [sliderRef, sliderInstance] = useKeenSlider({
      loop: false,
      mode: 'free',
      slides: {
         perView: 'auto',
         spacing: 0,
      },
   });
   const [isStart, setIsStart] = useState(true);
   const [isEnd, setIsEnd] = useState(false);
   useEffect(() => {
      if (!loading) {
         const updateButtonVisibility = () => {
            if (sliderInstance?.current) {
               const details = sliderInstance?.current.track.details;

               setIsStart(details?.rel === 0);

               const maxIndex = details?.maxIdx;
               setIsEnd(details?.rel >= maxIndex);
            }
         };

         sliderInstance?.current?.on('slideChanged', updateButtonVisibility);
         updateButtonVisibility();

         return () => {
            //@ts-expect-error: cause why not
            sliderInstance?.current?.off(
               'slideChanged',
               updateButtonVisibility
            );
         };
      }
   }, [sliderInstance, loading]);

   const handlePrev = () => {
      sliderInstance?.current?.prev();
   };

   const handleNext = () => {
      sliderInstance?.current?.next();
   };
   const { rooms } = useRooms();
   return (
      <main className="flex w-full flex-col px-16 pt-[140px] bg-white relative  md:px-4 xl:pt-16 ">
         <PageWrapper fetching={fetching} errorFetching={errorFetching}>
            <motion.section
               className="flex flex-col w-full gap-6 md:gap-2"
               animate={{
                  opacity: [0, 100],
                  transition: { ease: ['easeIn', 'easeOut'] },
               }}
            >
               <h1 className="neue-thin text-[48px] text-darkGrey uppercase text-black  xl:text-4xl lg:text-3xl md:text-2xl ">
                  {roomData?.content}
               </h1>
               <div
                  className="flex items-center gap-4 keen-slider  w-full  cursor-grab relative  md:pb-4"
                  ref={sliderRef}
               >
                  {!isStart && (
                     <div className=" bg-white  p-5 absolute top-0 -left-4 z-10 test-2  h-full "></div>
                  )}

                  {roomData?.menu.categories.map((data: any, index: number) => (
                     <Link
                        href={`/${room}/${data._id}`}
                        className="relative  !h-[370px]   !w-[330px] shrink-0  overflow-hidden keen-slider__slide flex flex-col  gap-2  opacity lg:!h-[300px] lg:!w-[280px] md:gap-1"
                        key={data?._id}
                     >
                        <div className="max-h-[330px]  w-full overflow-hidden  lg:max-h-[270px]">
                           <img
                              src={data?.image}
                              alt=""
                              className="min-w-full h-full object-cover relative z-[5]   hover:scale-[1.1]  duration-[3s] ease 
                            min-h-[330px] lg:min-h-[270px]"
                           />
                        </div>
                        <h1 className="text-lg  uppercase neue-light  spaced lg:text-base md:text-sm">
                           {data?.content}
                        </h1>
                     </Link>
                  ))}
                  {!isEnd && (
                     <div className=" bg-white  p-5 absolute top-0  -right-4 z-10 test  h-full "></div>
                  )}

                  {!isStart && (
                     <button
                        onClick={handlePrev}
                        className="absolute top-1/2 left-5 transform -translate-y-1/2 z-20 p-3  bg-white  rounded-full border border-lightGrey hover:border-black  duration-300"
                     >
                        <Image
                           src={leftIcon}
                           alt=""
                           className="w-4 rotate-180 md:w-3"
                        />
                     </button>
                  )}
                  {!isEnd && (
                     <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-5 transform -translate-y-1/2 z-20 p-3 bg-white  rounded-full border border-lightGrey hover:border-black duration-300"
                     >
                        <Image src={leftIcon} alt="" className="md:w-3" />
                     </button>
                  )}
               </div>
            </motion.section>
         </PageWrapper>
      </main>
   );
};

export default FurniturePage;
