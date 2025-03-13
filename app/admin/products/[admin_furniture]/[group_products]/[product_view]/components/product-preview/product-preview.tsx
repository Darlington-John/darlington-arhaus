import Image from 'next/image';
import imageIcon from '~/public/icons/no-image.svg';
const ProductPreview = (props: any) => {
   const { sliderRef, productData, selectedOption, thumbnailRef } = props;

   return (
      <div className="flex items-start  w-[60%]   shrink-0   gap-3   sm:flex-col  lg:gap-2 md:w-full lg:w-[55%] md:px-1 sticky top-10 md:static">
         <div
            ref={sliderRef}
            className="keen-slider !max-w-[90%] !min-w-[90%] sm:!max-w-full sm:!min-w-full "
         >
            {productData?.options[selectedOption]?.previews.length > 0 ? (
               productData?.options[selectedOption]?.previews.map(
                  (view: any, index: any) => (
                     <img
                        src={view}
                        className={`!w-full  !h-full   !max-w-[100%] !min-w-[100%] keen-slider__slide number-slide${
                           index + 1
                        }`}
                        alt="preview"
                        key={view}
                     />
                  )
               )
            ) : (
               <div className=" bg-lightestGrey  p-2  aspect-[calc(4)/3] w-full  h-full flex items-center justify-center">
                  <div className="flex items-center flex-col">
                     <Image className="w-20 mb-3" src={imageIcon} alt="" />

                     <h1 className="text-lg uppercase neue-light text-center  leading-none sm:text-base">
                        No previews yet
                     </h1>
                     <h1 className="text-sm neue-light text-grey">
                        Create an option to add previews
                     </h1>
                  </div>
               </div>
            )}
         </div>
         <div
            ref={thumbnailRef}
            className="flex !flex-col  !w-20 !h-full sm:!flex-row sm:mx-3 sm:!items-start "
         >
            {productData?.options[selectedOption]?.previews.map(
               (view: any, index: number) => (
                  <div
                     className={`!w-full  !h-auto  object-contain    !max-w-full !min-w-full   !min-h-0  !max-h-20    ring-offset-[1px] cursor-pointer  ring-lightGreen overflow-hidden  duration-150 dxs:!max-h-12   dxs:!min-w-16  !flex sm:!items-start      keen-slider__slide number-slide${
                        index + 1
                     }   `}
                     style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                     key={view}
                  >
                     <img
                        src={view}
                        className={`w-full   object-contain   dxs:!h-full dxs:w-auto     `}
                        alt="preview"
                     />
                  </div>
               )
            )}
         </div>
      </div>
   );
};

export default ProductPreview;
