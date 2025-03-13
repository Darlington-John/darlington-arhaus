import Image from 'next/image';
import infoRed from '~/public/icons/info-red.svg';
const ErrorPrompt = (props: any) => {
   const {
      productError,
      isProductErrorVisible,
      productErrorRef,
      insufficientProducts,
      setCheckout,
      toggleProductError,
      checkError,
   } = props;
   return (
      productError && (
         <div
            className={`fixed bottom-[0px]  h-full w-full  z-50 left-0 flex  justify-center  items-center        backdrop-brightness-50  px-8     xs:px-0 `}
         >
            <div
               className={`w-[350px]     mid-popup   duration-300 ease-in-out flex flex-col py-6 px-6  gap-4   rounded-lg bg-greyGreen  items-center      ${
                  isProductErrorVisible ? '' : 'mid-popup-hidden'
               }  `}
               ref={productErrorRef}
            >
               <div className="flex flex-col gap-3 items-center w-full">
                  <Image src={infoRed} alt="" className="w-12" />

                  <div className="flex flex-col gap-2 ">
                     <h1 className="text-2xl louize text-center">
                        Out of stock
                     </h1>
                     <p className="text-sm neue-light  text-center">
                        Some items in your bag have insufficient stock. Please
                        modify your bag or remove out-of-stock items before
                        proceeding with your order.
                     </p>
                  </div>
               </div>
               <div className="flex flex-col w-full ">
                  <div className="flex w-full gap-1 ">
                     <h1 className="text-xs   neue-light w-[75%] shrink-0  text-grey uppercase ">
                        product
                     </h1>

                     <h1 className="text-xs  neue-light text-grey   w-[25%] shrink-0 text-end ">
                        No. available
                     </h1>
                  </div>
                  {insufficientProducts?.length > 0 &&
                     insufficientProducts?.map((data: any) => (
                        <div
                           className="flex w-full gap-1 py-1"
                           key={data?.name}
                        >
                           <h1 className="text-[13px] capitalize line-clamp-1 neue-light w-[75%] shrink-0 ">
                              {data?.name}
                           </h1>

                           <h1 className="text-[13px] capitalize line-clamp-1  w-[25%] shrink-0  text-end">
                              {data?.availableStock}
                           </h1>
                        </div>
                     ))}
               </div>
               {checkError && (
                  <h1 className="text-[11px] neue-light text-red text-center">
                     {checkError}
                  </h1>
               )}

               <div className="flex gap-4 w-full">
                  <button
                     className="flex items-center justify-center  gap-2  h-[40px]  px-2 rounded-md bg-softGreen   duration-150 hover:ring hover:ring-[2px]  ring-softGreen  ring-offset-2  text-center w-[60%]"
                     onClick={() => setCheckout(false)}
                  >
                     <span className=" text-white uppercase  text-xs  text-center">
                        Edit bag
                     </span>
                  </button>
                  <button
                     className="flex items-center justify-center  gap-2  h-[40px]  px-2 rounded-md bg-grey     duration-150 hover:ring hover:ring-[2px]  ring-grey    ring-offset-2  text-center w-[40%] text-white "
                     onClick={toggleProductError}
                  >
                     Cancel
                  </button>
               </div>
            </div>
         </div>
      )
   );
};

export default ErrorPrompt;
