import Image from 'next/image';

import caretDown from '~/public/icons/caret-down.svg';
const MaterialsFilter = (props: any) => {
   const {
      toggleFilterPop,
      isFilterPopVisible,
      filterPop,
      filterPopRef,
      selectedMaterial,
      handleMaterialChange,
   } = props;
   return (
      <div className="relative  shrink-0">
         <button
            className="flex items-center gap-2  "
            onClick={toggleFilterPop}
         >
            <span className="text-xs text-darkGrey ">Surface Material</span>
            <Image
               src={caretDown}
               alt=""
               className={`w-3 duration-300 ${
                  isFilterPopVisible && 'rotate-180 '
               } `}
            />
         </button>
         {filterPop && (
            <div
               className={`absolute top-10 xs:top-5   p-6  bg-white  shadow-custom  left-0 duration-300 z-20 flex flex-col gap-3 xs:p-2 xs:gap-2    ${
                  isFilterPopVisible ? 'opacity-100' : 'opacity-0'
               } `}
               ref={filterPopRef}
            >
               <div className="flex items-center   gap-3  xs:gap-2">
                  <label className="radio-container">
                     <input
                        type="checkbox"
                        name="radio"
                        value="All"
                        aria-label="Select All Material"
                        checked={selectedMaterial === 'All'}
                        onChange={(e) => {
                           handleMaterialChange(e);
                           toggleFilterPop();
                        }}
                     />
                     <span className="checkmark"></span>
                  </label>
                  <span className="text-xs neue-thin uppercase xs:text-[11px]">
                     All
                  </span>
               </div>
               <div className="flex items-center   gap-3  xs:gap-2">
                  <label className="radio-container">
                     <input
                        type="checkbox"
                        name="radio"
                        value="Leather"
                        aria-label="Select Leather"
                        checked={selectedMaterial === 'Leather'}
                        onChange={(e) => {
                           handleMaterialChange(e);
                           toggleFilterPop();
                        }}
                     />
                     <span className="checkmark"></span>
                  </label>
                  <span className="text-xs neue-thin uppercase xs:text-[11px]">
                     Leather
                  </span>
               </div>
               <div className="flex items-center   gap-3  xs:gap-2">
                  <label className="radio-container">
                     <input
                        type="checkbox"
                        name="radio"
                        value="Upholstered"
                        aria-label="Upholstered"
                        checked={selectedMaterial === 'Upholstered'}
                        onChange={(e) => {
                           handleMaterialChange(e);
                           toggleFilterPop();
                        }}
                     />
                     <span className="checkmark"></span>
                  </label>
                  <span className="text-xs neue-thin uppercase xs:text-[11px]">
                     Upholstered
                  </span>
               </div>
               <div className="flex items-center   gap-3  xs:gap-2">
                  <label className="radio-container">
                     <input
                        type="checkbox"
                        name="radio"
                        value="Finish"
                        aria-label="Select Finish"
                        checked={selectedMaterial === 'Finish'}
                        onChange={(e) => {
                           handleMaterialChange(e);
                           toggleFilterPop();
                        }}
                     />
                     <span className="checkmark"></span>
                  </label>
                  <span className="text-xs neue-thin uppercase xs:text-[11px]">
                     Finish
                  </span>
               </div>
            </div>
         )}
      </div>
   );
};

export default MaterialsFilter;
