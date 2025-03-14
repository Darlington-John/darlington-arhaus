import Image from 'next/image';

import caretDown from '~/public/icons/caret-down.svg';
const AvailabilityFilter = (props: any) => {
   const {
      toggleAvailabilityFilter,
      isAvailabilityFilterVisible,
      availabilityFilterRef,
      availabilityFilter,
      selectedAvailability,
      handleAvailabilityChange,
   } = props;

   return (
      <div className="relative">
         <button
            className="flex items-center gap-2  "
            onClick={toggleAvailabilityFilter}
         >
            <span className="text-xs text-darkGrey">Availability</span>
            <Image
               src={caretDown}
               alt=""
               className={`w-3 duration-300 ${
                  isAvailabilityFilterVisible && 'rotate-180 '
               } `}
            />
         </button>
         {availabilityFilter && (
            <div
               className={`absolute top-10 xs:top-5   p-6  bg-white  shadow-custom  left-0 duration-300 z-20 flex flex-col gap-3 w-[200px] xs:p-2 xs:gap-2 xs:w-auto  xs:min-w-[100px]    ${
                  isAvailabilityFilterVisible ? 'opacity-100' : 'opacity-0'
               } `}
               ref={availabilityFilterRef}
            >
               <div className="flex items-center   gap-3 ">
                  <label className="radio-container">
                     <input
                        type="checkbox"
                        name="radio"
                        value="All"
                        checked={selectedAvailability === 'All'}
                        onChange={(e) => {
                           handleAvailabilityChange(e);
                           toggleAvailabilityFilter();
                        }}
                        aria-label="Select All Availability"
                     />
                     <span className="checkmark"></span>
                  </label>
                  <span className="text-xs neue-thin uppercase xs:text-[11px]">
                     All
                  </span>
               </div>
               <div className="flex items-center   gap-3 ">
                  <label className="radio-container">
                     <input
                        type="checkbox"
                        name="radio"
                        value="In stock"
                        checked={selectedAvailability === 'In stock'}
                        aria-label="Select In Stock"
                        onChange={(e) => {
                           handleAvailabilityChange(e);
                           toggleAvailabilityFilter();
                        }}
                     />
                     <span className="checkmark"></span>
                  </label>
                  <span className="text-xs neue-thin uppercase xs:text-[11px]">
                     In Stock
                  </span>
               </div>
            </div>
         )}
      </div>
   );
};

export default AvailabilityFilter;
