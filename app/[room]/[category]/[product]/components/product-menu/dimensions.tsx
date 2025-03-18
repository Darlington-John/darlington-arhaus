import Image from 'next/image';
import x from '~/public/icons/x-black.svg';
const Dimensions = (props: any) => {
   const {
      dimensions,
      isDimensionsVisible,
      dimensionsRef,
      toggleDimensions,
      productData,
   } = props;
   return (
      <div className="flex flex-col gap-2 py-3 items-start">
         <h1 className="text-xs neue-light">DIMENSIONS</h1>
         <h1 className="text-sm  neue-light">
            {productData?.dimensions?.width || '_'}&quot; Width x
            {productData?.dimensions?.depth || '_'}&quot; Depth x
            {productData?.dimensions?.height || '_'}&quot; Height
         </h1>
         <button
            className="text-xs neue-light underline text-grey"
            onClick={() => {
               toggleDimensions();
            }}
         >
            See full dimensions
         </button>
         {dimensions && (
            <div
               className={`fixed top-0  w-full h-full left-0   z-[10001] duration-[0.5s] ease  ${
                  isDimensionsVisible ? 'bg-[#22222240]' : 'bg-transparent'
               }`}
            >
               <div
                  className={`h-full bg-white w-[500px]  right-0 duration-300 z-[10001]  fixed flex flex-col  text-darkGrey top-0 gap-10 dxs:w-full   ${
                     isDimensionsVisible
                        ? 'translate-x-[0%]'
                        : 'translate-x-[100%] '
                  }`}
                  id="dimensions"
                  ref={dimensionsRef}
               >
                  <div className="flex items-center justify-between w-full  border-b border-b-lightGrey p-5 ">
                     <h1 className="neue-light text-[22px] ">Dimensions</h1>
                     <Image
                        src={x}
                        className="w-5  cursor-pointer"
                        alt=""
                        onClick={toggleDimensions}
                     />
                  </div>
                  <div className=" flex flex-col  px-8 divide-y divide-lightGrey">
                     {productData?.dimensions &&
                        Object.entries(
                           productData.dimensions as Record<string, number>
                        ).map(([key, value], index) => {
                           if (key === '_id') return null;

                           const formattedValue =
                              key === 'weight' ? `${value} LBS` : `${value}"`;

                           return (
                              <div
                                 className="w-full items-center justify-between py-2 flex"
                                 key={key}
                              >
                                 <span className="text-xs text-grey spaced uppercase neue-light">
                                    {key
                                       .replace(/([A-Z])/g, ' $1')
                                       .toUpperCase()}
                                 </span>
                                 <span className="text-sm text-darkGrey spaced uppercase neue-light">
                                    {formattedValue}
                                 </span>
                              </div>
                           );
                        })}
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default Dimensions;
