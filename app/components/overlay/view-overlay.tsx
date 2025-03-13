import { toggleViewOverlay } from './overlay';
import Link from 'next/link';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useRooms } from '~/app/context/rooms-context';

import { MainContext } from '~/app/context/context';
const ViewOverlay = (props: any) => {
   const { activeView } = props;
   const { rooms } = useRooms() as {
      rooms: any;
   };
   const main = (rooms || [])[activeView]?.menu;
   const linkname = usePathname();
   useEffect(() => {
      const viewElement = document.getElementById('viewOverlay');
      if (!viewElement) {
         return;
      }

      viewElement.style.transform = 'translateX(100%)';
   }, [linkname]);
   const { currentDir } = MainContext();

   return (
      <div
         className={`hidden  fixed  z-[120] top-o  left-0   ease duration-[0.4s]      h-full overflow-auto     xl:flex   items-start backdrop-brightness-[.6]  w-full  translate-x-[100%]  bg-white`}
         id="viewOverlay"
      >
         <div className="flex flex-col bg-white  h-full  relative w-full ">
            <div className="w-full  relative">
               <div className="flex items-center justify-between w-full  h-[60px] px-4   bg-transparent  absolute top-0 left-0">
                  <div
                     className="flex items-center gap-2 bg-[#00000021] p-2"
                     onClick={toggleViewOverlay}
                  >
                     <span className="p-1.5   border-b-[1px] border-r-[1px]  rotate-[135deg] border-white  "></span>
                     <h1 className="text neue-thin text-xs text-white tracking-[0.15em] ">
                        MENU
                     </h1>
                  </div>
               </div>
               <h1 className="text-[40px]  text-white neue-thin spaced uppercase absolute bottom-2  left-5 bg-[#00000029]">
                  {(rooms || [])[activeView]?.dir}
               </h1>
               <img
                  src={
                     (rooms || [])[activeView]?.image ||
                     main?.categories[0]?.image
                  }
                  alt=""
                  className="w-full max-h-[50vh] object-cover "
               />
            </div>
            <div className="flex flex-col w-full bg-white py-4 px-4  gap-4 ">
               <Link
                  href={`/${currentDir}`}
                  className="text-[11px]  neue       spaced  text-green uppercase"
               >
                  {(rooms || [])[activeView]?.content}
               </Link>
               <div className="flex flex-col gap-3">
                  {main?.categories.map((link: any, i: number) => (
                     <Link
                        href={`/${currentDir}/${link._id}`}
                        className="text-[15px]  neue     text-[#808080]  spaced  hover:text-green capitalize"
                        key={i}
                     >
                        {link?.content}
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default ViewOverlay;
