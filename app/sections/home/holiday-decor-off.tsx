import Image from 'next/image';
import decorImg from '~/public/images/decor-mobile.webp';
const HolidayDecorOff = () => {
   return (
      <section
         className="flex items-center justify-center  h-[80vh] bg-fixed bg-cover relative"
         style={{ backgroundImage: `url(/images/decor.jpeg)` }}
      >
         <Image
            src={decorImg}
            className="w-full h-full object-cover  pointer-events-none absolute  top-0 left-0 z-[1]  hidden dxs:flex  object-right  "
            priority
            alt=""
         />
         <div className="flex flex-col gap-8 items-center text-center px-5 relative z-10">
            <h1 className="text-6xl   louize text-white leading-none tracking-[0.15em] text-center  md:text-5xl  sm:text-4xl  dxs:text-3xl ">
               UP TO 70% OFF HOLIDAY DÉCOR
            </h1>
            <button className="p-5 flex items-center justify-center  bg-white text-darkGrey  uppercase  text-xs font-semibold  w-[190px]  h-[45px] hover:bg-black  hover:text-white duration-150 ">
               shop living
            </button>
         </div>
      </section>
   );
};

export default HolidayDecorOff;
