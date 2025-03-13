import Image from 'next/image';
import Link from 'next/link';
import { useRooms } from '~/app/context/rooms-context';
import cozy from '~/public/images/cozy.jpeg';
import gold from '~/public/images/dining-room-1.png';
const Cozy = () => {
   const { loading, rooms } = useRooms();
   return (
      <section className="flex items-center w-full h-screen lg:h-[60vh]  sm:flex-col sm:h-[120vh]">
         <div className="flex items-center justify-center flex-1 h-full relative sm:w-full">
            <Image
               src={cozy}
               alt=""
               className="w-full h-full object-cover absolute top-0 left-0"
            />
            <h1 className="uppercase  text-[72px] relative z-10  louize  text-white text-center  leading-none xl:text-5xl lg:text-4xl">
               SO COMPLETELY
               <br /> COZY
            </h1>
            {!loading && (
               <Link
                  href={rooms?.[3]?._id ?? '/'}
                  className="p-5 flex items-center justify-center  bg-white text-darkGrey  uppercase  text-xs font-semibold  w-[190px]  h-[45px] hover:bg-black  hover:text-white duration-150 absolute bottom-10  "
               >
                  shop bedroom
               </Link>
            )}
         </div>
         <div className="flex items-center justify-center flex-1 h-full relative sm:w-full">
            <Image
               src={gold}
               alt=""
               className=" w-full h-full object-cover absolute top-0 left-0 object-bottom"
            />
            <h1 className="uppercase  text-[72px] relative z-10  louize  text-white text-center  leading-none xl:text-5xl  lg:text-4xl">
               FEAST IN STYLE
            </h1>
            {!loading && (
               <Link
                  href={rooms?.[1]?._id ?? '/'}
                  className="p-5 flex items-center justify-center  bg-white text-darkGrey  uppercase  text-xs font-semibold  w-[190px]  h-[45px] hover:bg-black  hover:text-white duration-150 absolute bottom-10  "
               >
                  shop dining
               </Link>
            )}
         </div>
      </section>
   );
};

export default Cozy;
