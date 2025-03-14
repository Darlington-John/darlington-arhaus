import Image from 'next/image';

import caretDown from '~/public/icons/caret-down.svg';
const SortBy = (props: any) => {
   const {
      toggleSortPop,
      isSortPopVisible,
      sortPop,
      sortPopRef,
      selectedSort,
      handleSortChange,
   } = props;
   return (
      <div className="relative">
         <button className="flex items-center gap-2  " onClick={toggleSortPop}>
            <span className="text-xs text-darkGrey">{selectedSort}</span>
            <Image
               src={caretDown}
               alt=""
               className={`w-3 duration-300 ${
                  isSortPopVisible && 'rotate-180 '
               } `}
            />
         </button>
         {sortPop && (
            <div
               className={`absolute top-10  xs:top-5   p-6  bg-white  shadow-custom  right-0 duration-300 z-20 flex flex-col gap-3  xs:p-3 xs:w-[150px]   ${
                  isSortPopVisible ? 'opacity-100' : 'opacity-0'
               } `}
               ref={sortPopRef}
            >
               <div className="flex items-center   gap-3 xs:gap-2  xs:gap-2 ">
                  <label className="radio-container">
                     <input
                        type="checkbox"
                        name="radio"
                        value="Featured"
                        aria-label="Select Featured"
                        checked={selectedSort === 'Featured'}
                        onChange={(e) => {
                           handleSortChange(e);
                           toggleSortPop();
                        }}
                     />
                     {/* featured means 'All' */}
                     <span className="checkmark"></span>
                  </label>
                  <span className="text-xs neue-thin xs:text-[11px] uppercase xs:text-[11px]">
                     Featured
                  </span>
               </div>
               <div className="flex items-center   gap-3 xs:gap-2   ">
                  <label className="radio-container">
                     <input
                        type="checkbox"
                        name="radio"
                        aria-label="Select Name: A-Z"
                        value="Name: A-Z"
                        checked={selectedSort === 'Name: A-Z'}
                        onChange={(e) => {
                           handleSortChange(e);
                           toggleSortPop();
                        }}
                     />
                     <span className="checkmark"></span>
                  </label>
                  <span className="text-xs neue-thin xs:text-[11px] uppercase ">
                     Name: A-Z
                  </span>
               </div>
               <div className="flex items-center   gap-3 xs:gap-2  ">
                  <label className="radio-container">
                     <input
                        type="checkbox"
                        name="radio"
                        value="Name: Z-A"
                        aria-label="Select Z-A"
                        checked={selectedSort === 'Name: Z-A'}
                        onChange={(e) => {
                           handleSortChange(e);
                           toggleSortPop();
                        }}
                     />
                     <span className="checkmark"></span>
                  </label>
                  <span className="text-xs neue-thin xs:text-[11px] ">
                     Name: Z-A
                  </span>
               </div>
               <div className="flex items-center   gap-3 xs:gap-2  ">
                  <label className="radio-container">
                     <input
                        type="checkbox"
                        name="radio"
                        value="Price: High-to-Low"
                        aria-label="Select Price High to low"
                        checked={selectedSort === 'Price: High-to-Low'}
                        onChange={(e) => {
                           handleSortChange(e);
                           toggleSortPop();
                        }}
                     />
                     <span className="checkmark"></span>
                  </label>
                  <span className="text-xs neue-thin xs:text-[11px] ">
                     Price: High to Low
                  </span>
               </div>
               <div className="flex items-center   gap-3 xs:gap-2  ">
                  <label className="radio-container">
                     <input
                        type="checkbox"
                        name="radio"
                        value="Price: Low-to-High"
                        aria-label="Select Price low to high"
                        checked={selectedSort === 'Price: Low-to-High'}
                        onChange={(e) => {
                           handleSortChange(e);
                           toggleSortPop();
                        }}
                     />
                     <span className="checkmark"></span>
                  </label>
                  <span className="text-xs neue-thin xs:text-[11px] ">
                     Price: Low to High
                  </span>
               </div>
            </div>
         )}
      </div>
   );
};

export default SortBy;
