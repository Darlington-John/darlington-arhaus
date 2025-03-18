'use client';
import Image from 'next/image';
import livingroom from '~/public/images/living-cone.webp';
import dining from '~/public/images/dining-room-1.jpg';
import lighting from '~/public/images/lightcarousel.webp';
import beds from '~/public/images/bedcarousel.webp';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Link from 'next/link';
import { useRooms } from '~/app/context/rooms-context';
import { useEffect } from 'react';
const Features = () => {
   const imagesArray = [livingroom, dining, lighting, beds];

   const { rooms, loading } = useRooms();
   const [sliderRef, sliderInstance] = useKeenSlider<HTMLDivElement>(
      {
         loop: false,
         mode: 'free',
         slides: {
            perView: 'auto',
            spacing: 0,
         },
      },
      []
   );
   useEffect(() => {
      if (!loading && rooms?.length > 0) {
         sliderInstance.current?.update();
      }
   }, [loading, rooms, sliderInstance]);

   return (
      <section className="flex items-center  justify-center py-10 px-4  ">
         <div
            className="flex items-center gap-4  keen-slider "
            ref={!loading && rooms?.length > 0 ? sliderRef : null}
         >
            {loading
               ? ''
               : rooms?.map((data: any, index: number) => (
                    <Link
                       href={data?._id}
                       className="relative  h-[600px]   !w-[425px] shrink-0  overflow-hidden keen-slider__slide  xl:!w-[320px]  xl:h-[500px]  sm:!w-[240px] sm:h-[350px]"
                       key={data?._id}
                    >
                       <Image
                          src={imagesArray[index % imagesArray.length]}
                          alt=""
                          className="w-full h-full object-cover relative z-[5]   hover:scale-[1.1]  duration-[3s] ease"
                       />
                       <h1 className="absolute bottom-5  left-5   uppercase z-10  text-white text-4xl  louize lg:text-3xl md:text-2xl">
                          {data?.dir}
                       </h1>
                    </Link>
                 ))}
         </div>
      </section>
   );
};

export default Features;
