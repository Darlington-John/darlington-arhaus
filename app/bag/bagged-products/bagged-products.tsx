import CartCard from '~/app/components/cards/cart-card';

const BaggedProducts = (props: any) => {
   const {
      mergedBag,
      quantities,
      setQuantities,
      totalPrice,
      totalCancelledPrice,
      setCheckout,
   } = props;
   return mergedBag?.length === 0 ? (
      <p className="text-center uppercase spaced neue-light text-sm ">
         Your bag is empty.
      </p>
   ) : (
      <div className="  flex flex-col gap-4  w-full">
         <div className="flex flex-col gap-4  w-full md:overflow-x-auto  md:overflow-y-hidden md:pb-2">
            <div className="w-full  flex items-center  justify-between gap-4 py-4 border-b border-b-grey  md:w-[760px] lg:gap-3 md:hidden">
               <h1 className="text-xs dxs:text-[10px]   neue-bold uppercase spaced  w-[50%] lg:w-[55%] dxs:w-[40%]  shrink-none  ">
                  Product
               </h1>

               <h1 className="text-xs dxs:text-[10px]   neue-bold uppercase spaced  w-[20%]  shrink-none dxs:w-[25%]">
                  Price
               </h1>
               <h1 className="text-xs dxs:text-[10px]   neue-bold uppercase spaced  w-[20%] shrink-none lg:w-[10%] dxs:w-[20%]">
                  Quantity
               </h1>
               <h1 className="text-xs dxs:text-[10px]   neue-bold uppercase spaced  w-[10%] text-end shrink-none lg:w-[15%] dxs:w-[20%]">
                  Total
               </h1>
            </div>
            {mergedBag?.map((product: any, index: number) => (
               <CartCard
                  product={product}
                  mergedBag={mergedBag}
                  index={index}
                  quantities={quantities}
                  setQuantities={setQuantities}
                  totalPrice={totalPrice}
                  key={product?._id}
               />
            ))}
         </div>
         <div className="border-t border-t-grey w-full items-center justify-center  py-10 flex">
            <div className="flex flex-col gap-6 w-[750px] px-5 border-x border-x-lightGrey ">
               <div className="w-full flex flex-col ">
                  <div className="flex  gap-2 w-full justify-between ">
                     <h1 className="text-sm  neue-light text-grey dxs:text-xs">
                        Subtotal
                     </h1>
                     <h1 className="text-sm  neue-light text-grey spaced dxs:text-xs">
                        ₦{totalCancelledPrice.toLocaleString('en-US')}
                     </h1>
                  </div>
                  <div className="flex  gap-2 w-full justify-between ">
                     <h1 className="text-sm  neue-light text-grey dxs:text-xs">
                        Order discount
                     </h1>
                     <h1 className="text-sm  neue-light text-grey spaced dxs:text-xs">
                        - ₦
                        {(totalCancelledPrice - totalPrice).toLocaleString(
                           'en-US'
                        )}
                     </h1>
                  </div>
                  <div className="flex  gap-2 w-full justify-between ">
                     <h1 className="text-base  neue-light text-black dxs:text-sm">
                        Total
                     </h1>
                     <h1 className="text-base  neue-bold text-black spaced dxs:text-sm">
                        ₦{totalPrice.toLocaleString('en-US')}
                     </h1>
                  </div>
               </div>
               <button
                  className="bg-green   py-3  px-3 text-sm  text-white  hover:ring-[1px]  ring-offset-2 hover:ring-green   duration-150  self-start  w-full neue-bold dxs:text-xs"
                  onClick={() => setCheckout(true)}
               >
                  CHECKOUT
               </button>
            </div>
         </div>
      </div>
   );
};

export default BaggedProducts;
