import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { apiRequest } from '~/lib/utils/api-request';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

import check from '~/public/icons/check.svg';
import loader from '~/public/icons/loading-white.svg';
import { usePopup } from '~/lib/utils/toggle-popups';
import { useUser } from '~/app/context/auth-context';
import Link from 'next/link';
const CartCard = (props: any) => {
   const [removing, setRemoving] = useState(false);
   const [sucessful, setSucessful] = useState(false);
   const { user } = useUser();
   const { product, mergedBag, index, quantities, setQuantities } = props;
   const stockCount = product?.initial_stock_count;
   const quantitiesList = Array.from({ length: stockCount }, (_, i) => i + 1);
   const furnitureId = product?.furnitureId;
   const groupId = product?.groupId;
   const typeId = product?.typeId;
   const productId = product?.productId;
   const handleRemove = async () => {
      if (!productId) {
         toast.error('Bag ID not found');
         return;
      }

      setRemoving(true);

      await apiRequest({
         url: '/api/bag/remove-from-bag',
         method: 'DELETE',
         body: {
            furnitureId,
            groupId,
            typeId,
            productId,
            userId: user?._id,
         },
         onSuccess: () => {
            window.dispatchEvent(new CustomEvent('productFetched'));
            window.dispatchEvent(new CustomEvent('userUpdated'));
            window.dispatchEvent(new CustomEvent('usersUpdated'));
            window.dispatchEvent(new CustomEvent('bagFetched'));
            toast.success(`Product removed from bag`, {
               icon: <FaCheck color="white" />,
            });
         },
         onError: (error) => {
            toast.error(
               error ||
                  `Couldn't remove'
                     product from bag`
            );
         },
         onFinally: () => {
            setRemoving(false);
         },
      });
   };
   const {
      isVisible: isQuantityVisible,
      isActive: Quantity,
      ref: QuantityRef,
      togglePopup: toggleQuantity,
   } = usePopup();

   useEffect(() => {
      if (mergedBag) {
         setQuantities(mergedBag.map((product: any) => product?.quantity || 1));
      }
   }, [mergedBag]);
   const updateQuantity = (productIndex: number, newQuantity: number) => {
      setQuantities((prevQuantities: any) => {
         const updatedQuantities = [...prevQuantities]; // Copy array
         updatedQuantities[productIndex] = newQuantity; // Update specific index
         return updatedQuantities;
      });
      toggleQuantity(); // Close popup
   };

   return (
      <>
         <div className="w-full  flex items-start  justify-between gap-4 py-4  lg:gap-3 lg:py-0  md:w-[760px] md:gap-6 md:hidden">
            <div className="text-xs   neue-bold    w-[50%]  flex gap-5 lg:gap-3 lg:w-[55%]  dxs:w-[40%] dxs:items-end shrink-none dxs:max-w-[40%]  overflow-hidden">
               <Link
                  href={`/${product?.furnitureId}/${product?.groupId}/${product?.productId}`}
                  className="w-[250px] dxs:[150px]"
               >
                  <img
                     src={
                        product?.options &&
                        product?.selected_option in product?.options &&
                        product?.options[product.selected_option]?.previews
                           ?.length
                           ? product.options[product.selected_option]
                                .previews[0]
                           : null
                     }
                     alt=""
                     className="w-full"
                  />
               </Link>
               <div className="flex flex-col gap-4 lg:gap-2 xs:gap-1">
                  <h1 className="neue-light  text-base  capitalize lg:text-sm dxs:text-xs">
                     {product?.name}
                  </h1>
                  <h1 className="neue-light  text-xs  uppercase dxs:text-[10px] text-grey">
                     {product?.options ? 'Fabric' : 'Leather'}:{'   '}
                     {product?.options?.[product?.selected_option]?.option}
                  </h1>
                  <h1 className="  text-xs  uppercase dxs:text-[10px] dxs:neue-light text-grey">
                     {product?.options?.[product?.selected_option]?.stock
                        ?.in_stock === true
                        ? 'In stock'
                        : product?.options?.[product?.selected_option]?.stock
                             ?.when_in_stock}
                  </h1>
                  <button
                     className="bg-green   py-2 px-3 text-xs  text-white  hover:ring-[1px]  ring-offset-2 hover:ring-green   duration-150  self-start min-w-[120px]"
                     onClick={(e) => {
                        handleRemove();
                     }}
                  >
                     {sucessful ? (
                        <Image src={check} alt="" className="w-5 mx-auto" />
                     ) : removing ? (
                        <Image src={loader} alt="" className="w-5 mx-auto" />
                     ) : (
                        'Remove from Bag'
                     )}
                  </button>
               </div>
            </div>

            <div className="text-xs   neue-bold uppercase spaced  w-[20%]  shrink-none flex flex-col  dxs:w-[25%]">
               <h1 className="neue-light  text-sm  text-[#89331c]  md:text-xs">
                  ₦{product?.price?.toLocaleString('en-US') ?? 'N/A'}
               </h1>
               <h1 className="neue-light  text-sm  line-through  md:text-xs dxs:text-[10px]">
                  REG: ₦
                  {product?.cancelled_price?.toLocaleString('en-US') ?? 'N/A'}
               </h1>
            </div>
            <div className="text-xs   neue-bold uppercase spaced  w-[20%]  shrink-none flex flex-col lg:w-[10%]  dxs:w-[20%]">
               <div
                  className="text-xs uppercase  neue-bold tracking-widest flex gap-4 items-center   relative font-bold md:text-[10px] md:gap-1"
                  onClick={toggleQuantity}
               >
                  <span className="leading-none tracking-wider py-2">
                     Qty: <span className="pl-1">{quantities[index]}</span>
                  </span>
                  <button
                     className={`p-[3px]   border-b-[1px] border-r-[1px]   border-black duration-150 md:p-[2px]  ${
                        isQuantityVisible
                           ? ' rotate-[225deg]'
                           : ' rotate-[45deg] '
                     }`}
                  ></button>
                  {Quantity && (
                     <div
                        className={` items-start   bg-white absolute top-4  shadow-lg  w-[100px]  overflow-hidden grid grid-cols-2 z-10   ${
                           isQuantityVisible ? ' opacity-100' : ' opacity-0 '
                        } `}
                        ref={QuantityRef}
                     >
                        {quantitiesList.map((qty: number) => (
                           <button
                              className="w-full   py-3 bg-white hover:bg-lightGrey text-xs text-grey  text-center "
                              key={qty}
                              onClick={() => updateQuantity(index, qty)}
                           >
                              {qty}
                           </button>
                        ))}
                     </div>
                  )}
               </div>
            </div>
            <div className="text-xs    spaced  w-[10%] text-end shrink-none flex flex-col gap-2 lg:w-[15%] dxs:w-[20%]">
               <h1 className="neue-light  text-sm  text-[#89331c]  md:text-xs">
                  ₦
                  {product?.price && quantities[index] !== undefined
                     ? (product.price * quantities[index]).toLocaleString(
                          'en-US'
                       )
                     : 'N/A'}
               </h1>
               <h1 className="neue-light  text-sm  line-through  md:text-xs">
                  REG: ₦
                  {product?.cancelled_price && quantities[index] !== undefined
                     ? (
                          product.cancelled_price * quantities[index]
                       ).toLocaleString('en-US')
                     : 'N/A'}
               </h1>
            </div>
         </div>
         <div className="w-full hidden  md:flex items-start   gap-4  py-4     ">
            <Link
               href={`/${product?.furnitureId}/${product?.groupId}/${product?.typeId}/${product?.productId}`}
               className="max-w-[50%]  2xs:max-w-[40%]"
            >
               <img
                  src={
                     product?.options &&
                     product?.selected_option in product?.options &&
                     product?.options[product.selected_option]?.previews?.length
                        ? product.options[product.selected_option].previews[0]
                        : null
                  }
                  alt=""
                  className="w-full"
               />
            </Link>
            <div className="flex flex-col gap-3  w-full shrink-none">
               <div className="text-xs   neue-bold    w-full   flex gap-5 ">
                  <div className="flex flex-col gap-4 lg:gap-2 xs:gap-1">
                     <h1 className="neue-light  text-base  capitalize lg:text-sm dxs:text-xs">
                        {product?.name}
                     </h1>
                     <h1 className="neue-light  text-xs  uppercase dxs:text-[10px] text-grey">
                        {product?.options ? 'Fabric' : 'Leather'}:{'   '}
                        {product?.options?.[product?.selected_option]?.option}
                     </h1>
                     <h1 className="  text-xs  uppercase dxs:text-[10px] dxs:neue-light text-grey">
                        {product?.options?.[product?.selected_option]?.stock
                           ?.in_stock === true
                           ? 'In stock'
                           : product?.options?.[product?.selected_option]?.stock
                                ?.when_in_stock}
                     </h1>
                     <button
                        className="bg-green   py-2 px-3 text-xs  text-white  hover:ring-[1px]  ring-offset-2 hover:ring-green   duration-150  self-start min-w-[120px]"
                        onClick={(e) => {
                           handleRemove();
                        }}
                     >
                        {sucessful ? (
                           <Image src={check} alt="" className="w-5 mx-auto" />
                        ) : removing ? (
                           <Image src={loader} alt="" className="w-5 mx-auto" />
                        ) : (
                           'Remove from Bag'
                        )}
                     </button>
                  </div>
               </div>

               <div className="text-xs   neue-bold      shrink-none flex  gap-3  items-center">
                  <h1 className="font-bold">Price:</h1>
                  <div className="flex gap-3  spaced">
                     <h1 className="neue-light    text-[#89331c]  text-xs ">
                        ₦{product?.price?.toLocaleString('en-US') ?? 'N/A'}
                     </h1>
                     <h1 className="neue-light    line-through  text-xs text-grey ">
                        REG: ₦
                        {product?.cancelled_price?.toLocaleString('en-US') ??
                           'N/A'}
                     </h1>
                  </div>
               </div>
               <div className="text-xs   neue-bold uppercase spaced    shrink-none flex flex-col ">
                  <div
                     className=" uppercase  neue-bold tracking-widest flex  items-center   relative font-bold text-[10px] gap-1"
                     onClick={toggleQuantity}
                  >
                     <span className="leading-none tracking-wider ">
                        Qty: <span className="pl-1">{quantities[index]}</span>
                     </span>
                     <button
                        className={`p-[3px]   border-b-[1px] border-r-[1px]   border-black duration-150 md:p-[2px]  ${
                           isQuantityVisible
                              ? ' rotate-[225deg]'
                              : ' rotate-[45deg] '
                        }`}
                     ></button>
                     {Quantity && (
                        <div
                           className={` items-start   bg-white absolute top-4  shadow-lg  w-[100px]  overflow-hidden grid grid-cols-2 z-10   ${
                              isQuantityVisible ? ' opacity-100' : ' opacity-0 '
                           } `}
                           ref={QuantityRef}
                        >
                           {quantitiesList.map((qty: number) => (
                              <button
                                 className="w-full   py-3 bg-white hover:bg-lightGrey text-xs text-grey  text-center "
                                 key={qty}
                                 onClick={() => updateQuantity(index, qty)}
                              >
                                 {qty}
                              </button>
                           ))}
                        </div>
                     )}
                  </div>
               </div>

               <div className="text-xs   neue-bold      shrink-none flex  gap-3  items-center">
                  <h1 className="font-bold">Total:</h1>
                  <div className="flex gap-3  spaced">
                     <h1 className="neue-light    text-[#89331c]  text-xs ">
                        ₦
                        {product?.price && quantities[index] !== undefined
                           ? (product.price * quantities[index]).toLocaleString(
                                'en-US'
                             )
                           : 'N/A'}
                     </h1>
                     <h1 className="neue-light    line-through  text-xs text-grey ">
                        REG: ₦
                        {product?.cancelled_price &&
                        quantities[index] !== undefined
                           ? (
                                product.cancelled_price * quantities[index]
                             ).toLocaleString('en-US')
                           : 'N/A'}
                     </h1>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default CartCard;
