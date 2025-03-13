import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { context } from '~/app/context/context';
import { useRooms } from '~/app/context/rooms-context';
import searchWhiteIcon from '~/public/icons/search-white.svg';
const SearchBar = (props: any) => {
   const { isSearchBarVisible, searchBar, searchBarRef } = context();
   const { searchTerm, handleSearchChange } = props;
   const { rooms } = useRooms();
   const router = useRouter();
   return (
      searchBar && (
         <div
            className={`w-full bg-white py-1   px-4  hidden xl:flex  ease transition duration-[0.4s]  absolute top-[100%]   ${
               isSearchBarVisible ? ' pop' : ' pop-hidden'
            }`}
            ref={searchTerm ? null : searchBarRef}
         >
            <div className="flex dxs:w-full">
               <input
                  className="h-[45px]  px-3  bg-lighterGrey  border-black text-xs  w-[400px]  focus:border-[1px] border-lightGreen       outline-0 dxs:w-full   dxs:h-[40px]"
                  placeholder="What are you looking for? "
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
         </div>
      )
   );
};

export default SearchBar;
