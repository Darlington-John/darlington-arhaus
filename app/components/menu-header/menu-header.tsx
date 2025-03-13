'use client';
import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';
import Dropdown from './drop-down';
import { usePathname } from 'next/navigation';
import { useRooms } from '~/app/context/rooms-context';
import { context } from '~/app/context/context';
const MenuHeader = (props: any) => {
   const {
      displayedProducts,
      searchTerm,
      searchDropVisible,
      searchDrop,
      searchDropRef,
      toggleSearchDrop,
      noResults,
      setSearchTerm,
   } = props;
   const [activeDropdown, setActiveDropdown] = useState(null);
   const { rooms } = useRooms();
   const [isVisible, setIsVisible] = useState(false);
   const hideTimeout = useRef<any>(null);
   const handleMouseEnter = useCallback((index: any) => {
      if (hideTimeout.current) {
         clearTimeout(hideTimeout.current);
         hideTimeout.current = null;
      }
      setActiveDropdown(index);
      setIsVisible(true);
   }, []);

   const handleMouseLeave = useCallback(() => {
      hideTimeout.current = setTimeout(() => {
         setIsVisible(false);
         setTimeout(() => setActiveDropdown(null), 300);
      }, 300);
   }, []);
   const dropdownProps = {
      activeDropdown,
      isVisible,
      setIsVisible,
      hideTimeout,
      handleMouseLeave,
      displayedProducts,
      searchTerm,
      setSearchTerm,
      searchDropVisible,
      searchDrop,
      searchDropRef,
      toggleSearchDrop,
      noResults,
   };
   const linkname = usePathname();
   const { setCurrentDir, currentDir } = context();
   return (
      <div className={`w-full  ${linkname.startsWith('/auth') && 'hidden'}`}>
         {/^\s*$/.test(searchTerm) && (
            <div className="flex  justify-center h-[65px]  gap-6 relative border-b border-lightGrey  z-20 bg-white xl:hidden  ">
               {rooms?.map((data: any, index: any) => (
                  <Link
                     href={`/${data._id}`}
                     className={`h-full   flex items-center   relative   ${
                        linkname.startsWith(`/${data._id}`)
                           ? 'border-b-[3px]  border-black '
                           : ' grow-container'
                     }`}
                     key={data?._id}
                     onMouseEnter={() => {
                        handleMouseEnter(index);
                        setCurrentDir(data._id);
                     }}
                     onMouseLeave={handleMouseLeave}
                  >
                     <span className="px-3    uppercase text-xs text-green">
                        {data.dir}
                     </span>
                     <div className="grow   absolute bottom-0 left-0 w-0  h-[2px] bg-green"></div>
                  </Link>
               ))}
            </div>
         )}
         <Dropdown {...dropdownProps} />
      </div>
   );
};

export default MenuHeader;
