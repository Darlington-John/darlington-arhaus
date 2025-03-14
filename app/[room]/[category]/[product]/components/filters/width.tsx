import Image from 'next/image';

import caretDown from '~/public/icons/caret-down.svg';
const WidthFilter = (props: any) => {
   const {
      toggleWidthFilter,
      isWidthFilterVisible,
      widthFilterRef,
      widthFilter,
      selectedWidth,
      handleWidthChange,
   } = props;

   return (
      <div className="relative">
         <button
            className="flex items-center gap-2  "
            onClick={toggleWidthFilter}
         >
            <span className="text-xs text-darkGrey">Width</span>
            <Image
               src={caretDown}
               alt=""
               className={`w-3 duration-300 ${
                  isWidthFilterVisible && 'rotate-180 '
               } `}
            />
         </button>
         {widthFilter && (
            <div
               className={`absolute top-10   p-6  bg-white  shadow-custom  left-0 duration-300 z-20 xs:top-5  flex flex-col gap-3 w-[200px]   xs:p-2 xs:gap-2 xs:w-[150px] xs:left-auto xs:right-0  ${
                  isWidthFilterVisible ? 'opacity-100' : 'opacity-0'
               } `}
               ref={widthFilterRef}
            >
               <div className="flex items-center   gap-3  xs:gap-2">
                  <label className="radio-container">
                     <input
                        type="checkbox"
                        name="radio"
                        value="All"
                        checked={selectedWidth === 'All'}
                        aria-label="Select Width"
                        onChange={(e) => {
                           handleWidthChange(e);
                           toggleWidthFilter();
                        }}
                     />
                     <span className="checkmark"></span>
                  </label>
                  <span className="text-xs neue-thin uppercase xs:text-[11px]">
                     All
                  </span>
               </div>
               <div className="flex items-center   gap-3 xs:gap-2 ">
                  <label className="radio-container">
                     <input
                        type="checkbox"
                        name="radio"
                        value="0 - 20"
                        aria-label="Select width"
                        checked={selectedWidth === '0 - 20'}
                        onChange={(e) => {
                           handleWidthChange(e);
                           toggleWidthFilter();
                        }}
                     />
                     <span className="checkmark"></span>
                  </label>
                  <span className="text-xs neue-thin uppercase xs:text-[11px]">
                     0 - 20 inches
                  </span>
               </div>
               <div className="flex items-center   gap-3 xs:gap-2 ">
                  <label className="radio-container">
                     <input
                        type="checkbox"
                        name="radio"
                        value="20 - 40"
                        aria-label="Select width"
                        checked={selectedWidth === '20 - 40'}
                        onChange={(e) => {
                           handleWidthChange(e);
                           toggleWidthFilter();
                        }}
                     />
                     <span className="checkmark"></span>
                  </label>
                  <span className="text-xs neue-thin uppercase xs:text-[11px]">
                     20 - 40 inches
                  </span>
               </div>
               <div className="flex items-center   gap-3 xs:gap-2 ">
                  <label className="radio-container">
                     <input
                        type="checkbox"
                        name="radio"
                        value="40 - 100"
                        aria-label="Select width 40 -100"
                        checked={selectedWidth === '40 - 100'}
                        onChange={(e) => {
                           handleWidthChange(e);
                           toggleWidthFilter();
                        }}
                     />
                     <span className="checkmark"></span>
                  </label>
                  <span className="text-xs neue-thin uppercase xs:text-[11px]">
                     40 - 100 inches
                  </span>
               </div>
               <div className="flex items-center   gap-3  xs:gap-2">
                  <label className="radio-container">
                     <input
                        type="checkbox"
                        name="radio"
                        value="100+"
                        aria-label="Select width"
                        checked={selectedWidth === '100+'}
                        onChange={(e) => {
                           handleWidthChange(e);
                           toggleWidthFilter();
                        }}
                     />
                     <span className="checkmark"></span>
                  </label>
                  <span className="text-xs neue-thin uppercase xs:text-[11px]">
                     100+ inches
                  </span>
               </div>
            </div>
         )}
      </div>
   );
};

export default WidthFilter;
