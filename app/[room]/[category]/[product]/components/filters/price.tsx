import Image from 'next/image';

import caretDown from '~/public/icons/caret-down.svg';
const Price = (props: any) => {
   const {
      togglePriceFilter,
      isPriceFilterVisible,
      priceFilterRef,
      priceFilter,
      selectedPrice,
      handlePriceChange,
   } = props;

   return (
      <div className="relative">
         <button
            className="flex items-center gap-2  "
            onClick={togglePriceFilter}
         >
            <span className="text-xs text-darkGrey">Price</span>
            <Image
               src={caretDown}
               alt=""
               className={`w-3 duration-300 ${
                  isPriceFilterVisible && 'rotate-180 '
               } `}
            />
         </button>
         {priceFilter && (
            <div
               className={`absolute top-10   p-6  bg-white  shadow-custom  left-0 duration-300 z-20 flex flex-col gap-3 w-[200px] xs:top-5  xs:p-2  xs:left-auto  xs:right-0 xs:w-auto  xs:min-w-[120px]  ${
                  isPriceFilterVisible ? 'opacity-100' : 'opacity-0'
               } `}
               ref={priceFilterRef}
            >
               <div className="flex items-center   gap-3 ">
                  <label className="radio-container">
                     <input
                        type="checkbox"
                        name="radio"
                        value="All"
                        aria-label="Select Price"
                        checked={selectedPrice === 'All'}
                        onChange={(e) => {
                           handlePriceChange(e);
                           togglePriceFilter();
                        }}
                     />
                     <span className="checkmark"></span>
                  </label>
                  <span className="text-xs neue-thin uppercase">All</span>
               </div>
               <div className="flex items-center   gap-3 ">
                  <label className="radio-container">
                     <input
                        type="checkbox"
                        name="radio"
                        value="10-50"
                        aria-label="Select Price"
                        checked={selectedPrice === '10-50'}
                        onChange={(e) => {
                           handlePriceChange(e);
                           togglePriceFilter();
                        }}
                     />
                     <span className="checkmark"></span>
                  </label>
                  <span className="text-xs neue-thin uppercase">₦10 - ₦50</span>
               </div>
               <div className="flex items-center   gap-3 ">
                  <label className="radio-container">
                     <input
                        type="checkbox"
                        name="radio"
                        value="50+"
                        aria-label="Select Price"
                        checked={selectedPrice === '50+'}
                        onChange={(e) => {
                           handlePriceChange(e);
                           togglePriceFilter();
                        }}
                     />
                     <span className="checkmark"></span>
                  </label>
                  <span className="text-xs neue-thin uppercase">₦50+</span>
               </div>
            </div>
         )}
      </div>
   );
};

export default Price;
