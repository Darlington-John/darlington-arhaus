'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import { useUser } from '~/app/context/auth-context';
import heroImg from '~/public/images/hero.webp';
import heroMobileImg from '~/public/images/living-mobile.webp';
const Hero = () => {
   const { user } = useUser();

   return (
      <section className="h-screen w-full  flex items-end  justify-center relative md:h-[80vh]">
         <Image
            src={heroImg}
            className="w-full h-full object-cover  pointer-events-none absolute  top-0 left-0 z-[1]    md:hidden"
            alt=""
            priority
         />
         <Image
            src={heroMobileImg}
            className="w-full h-full object-cover  pointer-events-none absolute  top-0 left-0 z-[1]    md:flex  hidden"
            alt=""
            priority
         />

         <div className="flex flex-col relative z-[2]  gap-10  items-center py-6 xl:gap-5 ">
            <h1 className="uppercase text-[80px]  louize text-white leading-none tracking-[0.15em] text-center xl:text-7xl md:text-5xl xs:text-4xl  ">
               A space for <br />
               the season
            </h1>
            <button className="p-5 flex items-center justify-center  bg-white text-darkGrey  uppercase  text-xs font-semibold  w-[190px]  h-[45px] hover:bg-black  hover:text-white duration-150 ">
               shop living
            </button>
         </div>
      </section>
   );
};

export default Hero;
