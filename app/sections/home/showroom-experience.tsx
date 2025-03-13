import Image from 'next/image';
import showroom from '~/public/images/view.webp';
import showroomMob from '~/public/images/view-mobile.webp';
import Link from 'next/link';
const ShowroomExperience = () => {
   return (
      <section className="h-[90vh]  w-full relative flex items-end justify-center  py-12   px-5  sm:h-[70vh]">
         <Image
            src={showroom}
            alt=""
            className="w-full h-full object-cover  absolute top-0 left-0 dxs:hidden"
            priority
         />
         <Image
            src={showroomMob}
            alt=""
            className="w-full h-full object-cover  absolute top-0 left-0 hidden dxs:flex "
            priority
         />
         <div className="flex items-center gap-0  text-white relative z-10  flex-col xl:gap-2  sm:gap-6 ">
            <h1 className="neue text-base spaced text-center uppercase">
               The arhaus showroom experience
            </h1>
            <h1 className="louize text-[72px]  spaced xl:text-6xl md:text-4xl  text-center">
               IMMERSIVE INSPIRATION
            </h1>
            <Link
               href={'/auth/sign-up'}
               className="p-5 flex items-center justify-center  bg-white text-darkGrey  uppercase  text-xs font-semibold  w-[190px]  h-[45px] hover:bg-black  hover:text-white duration-150 "
            >
               get started
            </Link>
         </div>
      </section>
   );
};

export default ShowroomExperience;
