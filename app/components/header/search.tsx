'use client';

import Image from 'next/image';
import bars from '~/public/icons/bars.svg';
import xmark from '~/public/icons/x-black.svg';
import searchIcon from '~/public/icons/search.svg';
import searchWhiteIcon from '~/public/icons/search-white.svg';
import { usePopup } from '~/lib/utils/toggle-popups';
import { MainContext } from '~/app/context/context';
import { useRooms } from '~/app/context/rooms-context';
import { useRouter } from 'next/navigation';

export const toggleOverlay = () => {
   const overlayElement = document.getElementById('myOverlay');
   if (!overlayElement) {
      return;
   }

   if (overlayElement.style.width === '100%') {
      overlayElement.style.width = '0%';
   } else {
      overlayElement.style.width = '100%';
   }
};

type searchProps = {
   handleSearchChange: (
      event: React.ChangeEvent<HTMLInputElement>,
      rooms: any
   ) => void;
   searchTerm: string;
   noResults: boolean;
   searchDropVisible: boolean;
   // isActive: searchDrop,
   ref: any;
   toggleSearchDrop: () => void;
};
const Search = ({
   handleSearchChange,
   searchTerm,
   noResults,
   searchDropVisible,
   ref,
   toggleSearchDrop,
}: searchProps) => {
   const {
      isVisible: isSearchVisible,
      isActive: search,
      ref: searchRef,
      togglePopup: toggleSearch,
   } = usePopup();
   const { isOverlayOpen, setIsOverlayOpen, toggleSearchBarPopup } =
      MainContext();
   const handleToggleOverlay = () => {
      toggleOverlay();
      setIsOverlayOpen(!isOverlayOpen);
   };
   const { rooms } = useRooms();
   const router = useRouter();
   return (
      <div className=" flex gap-2 items-center xl:gap-4   " ref={ref}>
         <Image
            src={isOverlayOpen ? xmark : bars}
            alt=""
            className="hidden xl:flex  w-5"
            onClick={handleToggleOverlay}
         />
         <Image
            src={searchIcon}
            alt="search"
            className="w-5 xl:w-4  hidden xl:flex cursor-pointer"
            onClick={() => {
               if (/^\s*$/.test(searchTerm)) {
                  toggleSearchBarPopup();
               }
            }}
         />

         {search ? (
            <div
               ref={searchTerm ? null : searchRef}
               className={`transition duration-[0.4s]  flex  xl:hidden    ${
                  isSearchVisible ? '' : 'opacity-0 '
               }`}
            >
               <input
                  className="h-[45px]  px-3  bg-lighterGrey  border-black text-xs  w-[280px]  focus:border-[1px] border-lightGreen       outline-0  "
                  placeholder="What are you looking for? "
                  type="text"
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e, rooms)}
               />

               <button
                  className="flex  bg-green items-center justify-center  w-[45px]"
                  onClick={() => {
                     if (!/^\s*$/.test(searchTerm)) {
                        router.push(`/search/?search=${searchTerm}`);
                     }
                  }}
               >
                  <Image src={searchWhiteIcon} alt="search" className="w-4" />
               </button>
            </div>
         ) : (
            <button
               onClick={() => {
                  toggleSearch();
                  toggleSearchDrop();
               }}
               className="flex gap-2 items-center xl:hidden"
            >
               <Image src={searchIcon} alt="search" className="w-5 xl:w-4 " />
               <span className="text-xs xl:hidden ">SEARCH</span>
            </button>
         )}
      </div>
   );
};

export default Search;
