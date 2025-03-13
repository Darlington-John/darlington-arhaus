import Image from 'next/image';

import caretDown from '~/public/icons/caret-down.svg';
const OptionsFilter = (props: any) => {
   const {
      allUniqueOptions,
      toggleOptionFilter,
      isOptionFilterVisible,
      optionFilterRef,
      optionFilter,
      selectedOption,
      handleOptionChange,
   } = props;

   return (
      <div className="relative ">
         <button
            className="flex items-center gap-2  "
            onClick={toggleOptionFilter}
         >
            <span className="text-xs text-darkGrey">Option</span>
            <Image
               src={caretDown}
               alt=""
               className={`w-3 duration-300 ${
                  isOptionFilterVisible && 'rotate-180 '
               } `}
            />
         </button>
         {optionFilter && (
            <div
               className={`absolute  top-10 xs:top-5   p-6  bg-white  shadow-2xl  left-0 duration-300 z-20 flex flex-col gap-4 min-w-[400px]  xs:min-w-[200px]     xs:p-2 xs:gap-2  ${
                  isOptionFilterVisible ? 'opacity-100' : 'opacity-0'
               } `}
               ref={optionFilterRef}
            >
               <div className="flex items-center gap-2">
                  <label className="radio-container">
                     <input
                        type="checkbox"
                        name="radio"
                        value="All"
                        aria-label="Select All Option"
                        checked={selectedOption === 'All'}
                        onChange={(e) => {
                           handleOptionChange(e);
                           toggleOptionFilter();
                        }}
                     />
                     <span className="checkmark"></span>
                  </label>
                  <h1 className="text-xs neue-thin uppercase xs:text-[11px]">
                     All
                  </h1>
               </div>
               <div className="grid grid-cols-2 gap-3  xs:flex xs:flex-col xs:gap-2">
                  {allUniqueOptions.map(({ option, option_image }: any) => (
                     <div key={option} className="flex items-center gap-2  ">
                        <label className="radio-container">
                           <input
                              type="checkbox"
                              name="radio"
                              aria-label={`Select All Availability ${option}`}
                              value={option}
                              checked={selectedOption === option}
                              onChange={(e) => {
                                 handleOptionChange(e);
                                 toggleOptionFilter();
                              }}
                           />
                           <span className="checkmark"></span>
                        </label>
                        <div className="flex items-center gap-2">
                           <p className="text-xs neue-thin uppercase line-clamp-1 xs:text-[11px]">
                              {option}
                           </p>
                           <img
                              src={option_image}
                              alt={option}
                              className="w-4  h-4 object-cover rounded-full"
                           />
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         )}
      </div>
   );
};

export default OptionsFilter;
