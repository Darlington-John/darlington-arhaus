'use client';
import Image from 'next/image';
import room from '~/public/images/room.webp';
import bag from '~/public/icons/bag.svg';
import { useRooms } from '~/app/context/rooms-context';
import Link from 'next/link';

const FinnleyCollection = () => {
   const { rooms, loading } = useRooms();
   return (
      <section className="flex items-center gap-5 py-20 md:flex-col dxs:pt-10  ">
         <div className="relative  w-full    ">
            <Image src={room} alt="" className="w-full " />
            {!loading && (
               <Link
                  href={rooms?.[1]?._id ?? '/'}
                  className="p-5 flex items-center justify-center  bg-white text-darkGrey  uppercase  text-xs font-semibold  w-[190px]  h-[45px]
            lg:w-auto lg:h-auto  lg:p-3  lg:rounded-full 
            hover:bg-black  hover:text-white duration-150 absolute bottom-10  right-10 z-10 rounded-2xl lg:bottom-4 lg:right-4 "
               >
                  <span className="lg:hidden">shop the room</span>
                  <Image className="w-4 hidden lg:flex" alt="" src={bag} />
               </Link>
            )}
         </div>
         <div className="flex shrink-0 flex-col  gap-4   px-16  xl:gap-3 xl:px-5">
            <h1 className="uppercase text-xs text-white spaced">
               THE FINNLEY DINING collection
            </h1>
            <h1 className="text-[40px] louize text-white leading-tight uppercase tracking-widest xl:text-3xl  md:text-4xl  dxs:text-3xl ">
               Impossibly <br className="md:hidden " />
               Original
            </h1>
            <p className="text-base neue-thin text-white  w-[370px] text-justify md:w-full dxs:text-sm ">
               It’s one of our must-have (and most-loved) collections for a
               reason. Combining reeded oak, metallic accents, and stone,
               Finnley elevates every gathering with irrefutable appeal.
            </p>
            {!loading && (
               <Link
                  className="p-5 flex items-center justify-center   text-white   uppercase  text-xs font-semibold  w-[190px]  h-[45px] hover:bg-white  hover:text-black  duration-150  border border-white "
                  href={rooms?.[1]?._id ?? '/'}
               >
                  shop dining
               </Link>
            )}
         </div>
      </section>
   );
};

export default FinnleyCollection;
