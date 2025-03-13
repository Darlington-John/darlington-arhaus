'use client';
import Image from 'next/image';
import room from '~/public/images/room-black.webp';
import bag from '~/public/icons/bag.svg';
import { useRooms } from '~/app/context/rooms-context';
import Link from 'next/link';
import { IRooms } from '~/types/rooms';
const CoburnReclining = () => {
   const { rooms, loading } = useRooms();
   return (
      <section className="flex items-center gap-5 py-20 md:flex-col ">
         <div className="flex shrink-0 flex-col  gap-4   px-16  xl:gap-3 xl:px-5 md:order-1 ">
            <h1 className="uppercase text-xs text-white spaced">
               The Coburn Reclining collection
            </h1>
            <h1 className="text-[40px] louize text-white leading-tight uppercase tracking-widest xl:text-3xl  md:text-4xl  dxs:text-3xl ">
               Relaxation, <br className="md:hidden " />
               Reimagined
            </h1>
            <p className="text-base neue-thin text-white  w-[370px] text-justify md:w-full dxs:text-sm ">
               Sacrifice comfort for style? Never. Coburn’s contemporary
               silhouettes are crafted in sleek, sophisticated leather for easy
               hours of effortless lounging.
            </p>
            {!loading && (
               <Link
                  href={`/${rooms[0]?._id}/${rooms[0]?.menu?.categories[0]?._id}`}
                  className="p-5 flex items-center justify-center   text-white   uppercase  text-xs font-semibold  w-[220px]  h-[45px] hover:bg-white  hover:text-black  duration-150  border border-white"
               >
                  shop sofas
               </Link>
            )}
         </div>
         <div className="relative  w-full    ">
            <Image src={room} alt="" className="w-full " />
            {!loading && (
               <Link
                  href={`/${rooms[0]?._id}`}
                  className="p-5 flex items-center justify-center  bg-white text-darkGrey  uppercase  text-xs font-semibold  w-[190px]  h-[45px]
              lg:w-auto lg:h-auto  lg:p-3  lg:rounded-full 
              hover:bg-black  hover:text-white duration-150 absolute bottom-10  right-10 z-10 rounded-2xl lg:bottom-4 lg:right-4 "
               >
                  <span className="lg:hidden">shop the room</span>
                  <Image className="w-4 hidden lg:flex" alt="" src={bag} />
               </Link>
            )}
         </div>
      </section>
   );
};

export default CoburnReclining;
