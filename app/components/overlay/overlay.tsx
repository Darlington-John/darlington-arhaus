'use client';

import Image from 'next/image';
import logo from '~/public/images/arhaus.svg';
import xmark from '~/public/icons/x-black.svg';
import { toggleOverlay } from '../header/search';
import { usePathname, useRouter } from 'next/navigation';
import loadingGif from '~/public/icons/double-loading-black.svg';
import { MainContext } from '~/app/context/context';
import { useCallback, useEffect, useState } from 'react';
import ViewOverlay from './view-overlay';
import Link from 'next/link';
import { useRooms } from '~/app/context/rooms-context';
import { useKeenSlider } from 'keen-slider/react';
const Overlay = () => {
   const { rooms, loading } = useRooms();
   const { isOverlayOpen, setIsOverlayOpen, setCurrentDir, currentDir } =
      MainContext();
   const linkname = usePathname();
   useEffect(() => {
      const overlayElement = document.getElementById('myOverlay');

      if (!overlayElement) {
         return;
      }
      overlayElement.style.width = '0%';
      setIsOverlayOpen(false);
   }, [linkname, setIsOverlayOpen]);
   const handleToggleOverlay = () => {
      toggleOverlay();
      setIsOverlayOpen(!isOverlayOpen);
   };
   const [activeView, setActiveView] = useState(0);
   const handleSetView = useCallback((index: any) => {
      setActiveView(index);
   }, []);
   const viewProps = {
      activeView,
   };

   const main = (rooms || [])[0]?.menu;
   const mainCategories = rooms?.flatMap(
      (room: any) => room.menu?.categories || []
   );
   const router = useRouter();
   const handleNavigation = (url: string) => {
      router.push(url);
   };
   const [overlayRef] = useKeenSlider<HTMLDivElement>({
      loop: false,
      mode: 'free',
      slides: {
         perView: 'auto',
         spacing: 0,
      },
   });
   return (
      <>
         <div
            className={`hidden  fixed  z-[100] top-0  left-0   ease duration-[0.4s]    overflow-x-hidden  h-full    xl:flex   items-start backdrop-brightness-[.6]  w-[0px]`}
            id="myOverlay"
         >
            <div className="flex flex-col bg-lighterGrey h-full  relative w-full ">
               <div className="flex items-center justify-between w-full  h-[60px] px-4  border-b border-b-[1px] border-b-lightGrey overflow-x-hidden bg-white">
                  <Link href={'/'}>
                     <Image
                        src={logo}
                        alt=""
                        className="min-w-[100px] w-[100px]  shrink-0 "
                     />
                  </Link>
                  <Image
                     src={xmark}
                     alt=""
                     onClick={handleToggleOverlay}
                     className="cursor-pointer w-4 shrink-0"
                  />
               </div>
               {loading ? (
                  <div className="bg-white h-[40vh] w-full flex items-center justify-center opacity-20">
                     <Image
                        src={loadingGif}
                        alt="Loading"
                        className="w-16  md:w-10"
                     />
                  </div>
               ) : (
                  <>
                     <div className="flex flex-col w-full bg-white">
                        {rooms?.map((data: any, index: any) => (
                           <div
                              className="flex items-center justify-between w-full  h-[60px] px-4  border-b border-b-[1px] border-b-lightGrey overflow-hidden"
                              key={data?._id}
                              onClick={() => {
                                 toggleViewOverlay();
                                 handleSetView(index);
                                 setCurrentDir(data._id);
                              }}
                           >
                              <h1 className="text-xs neue uppercase text-darkGrey tracking-[0.15em]">
                                 {data.dir}
                              </h1>
                              <span className="p-1   border-b-[1px] border-r-[1px]  rotate-[315deg] border-grey  "></span>
                           </div>
                        ))}
                     </div>

                     <div
                        className="flex gap-4          items-start  keen-slider  px-4 my-4 "
                        ref={overlayRef}
                     >
                        {mainCategories?.map((category: any, index: number) => {
                           const group = category;

                           if (!group) return null;

                           return (
                              <div
                                 key={category._id}
                                 onClick={() =>
                                    handleNavigation(
                                       `/${currentDir}/${category?._id}/${group?._id}`
                                    )
                                 }
                                 className={`relative   shrink-0  overflow-hidden keen-slider__slide  xl:!w-[320px]  xl:h-[350px]  sm:!w-[240px] sm:h-[260px]`}
                              >
                                 {group?.image && (
                                    <img
                                       src={group.image}
                                       alt={group?.type ?? 'Category Image'}
                                       className=" object-cover"
                                    />
                                 )}
                                 <Link
                                    href={
                                       category?._id && group?._id
                                          ? `/${currentDir}/${category._id}/${group._id}`
                                          : '/'
                                    }
                                    className="uppercase neue-bold text-green text-xs relative pb-2 tracking-widest"
                                 >
                                    shop {group?.content ?? ''}
                                    <div className="grow absolute bottom-0 left-0 w-0 h-[2px] bg-green"></div>
                                 </Link>
                              </div>
                           );
                        })}
                     </div>
                  </>
               )}

               <div className="flex items-start  bg-lighterGrey  py-5  gap-4 px-4">
                  <Link
                     href="/auth/sign-up"
                     className="p-5 flex items-center justify-center  bg-white text-darkGrey    text-sm   px-3  h-[45px] hover:bg-green   hover:text-white duration-150 border border-lightGrey  shrink-0"
                  >
                     Create account
                  </Link>
                  <Link
                     href="/auth/log-in"
                     className="p-5 flex items-center justify-center  bg-black   text-white     text-sm   px-3  h-[45px] hover:bg-white  hover:text-black  duration-150  border  hover:border border-lightGrey"
                  >
                     Log in
                  </Link>
               </div>
            </div>
         </div>

         <ViewOverlay {...viewProps} />
      </>
   );
};

export default Overlay;
export const toggleViewOverlay = () => {
   const overlayElement = document.getElementById('viewOverlay');
   if (!overlayElement) {
      return;
   }

   if (overlayElement.style.transform === 'translateX(0%)') {
      overlayElement.style.transform = 'translateX(100%)';
   } else {
      overlayElement.style.transform = 'translateX(0%)';
   }
};
