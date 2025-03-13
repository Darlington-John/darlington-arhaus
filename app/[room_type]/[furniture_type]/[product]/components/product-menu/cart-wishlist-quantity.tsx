import Image from 'next/image';
import bag from '~/public/icons/bagwhite.svg';
import heart from '~/public/icons/heart.svg';
import loadingIcon from '~/public/icons/double-loading-black.svg';
import loadingWhite from '~/public/icons/loading-white.svg';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useUser } from '~/app/context/auth-context';
import { useEffect, useState } from 'react';
import { apiRequest } from '~/lib/utils/api-request';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';
const CartWishlistQuantity = (props: any) => {
   const {
      toggleQuantity,
      quantity,
      isQuantityVisible,
      QuantityRef,
      Quantity,
      quantities,
      setQuantity,
      selectedOption,
      setProductId,
      productData,
   } = props;
   const { user } = useUser();
   const router = useRouter();
   const pathname = usePathname();
   const { room_type, furniture_type, furniture_sub, product } = useParams();

   const [loadingWishlist, setLoadingWishlist] = useState(false);
   const wishlisted = user?.wishlist?.some(
      (wish: any) => wish.productId === productData._id
   );
   const [loadingBag, setLoadingBag] = useState(false);

   const handleWishlistAction = async (action: 'add' | 'remove') => {
      if (!user) {
         router.push(`/auth/log-in/?redirect=${encodeURIComponent(pathname)}`);
         return;
      }

      if (!productData?._id) {
         toast.error('Product ID not found');
         return;
      }

      setLoadingWishlist(true);

      await apiRequest({
         url:
            '/api/wishlist/' +
            (action === 'add' ? 'add-to-wishlist' : 'remove-from-wishlist'),
         method: action === 'add' ? 'POST' : 'DELETE',
         body: {
            furnitureId: room_type,
            groupId: furniture_type,
            typeId: furniture_sub,
            productId: productData._id,
            userId: user?._id,
         },
         onSuccess: () => {
            window.dispatchEvent(new CustomEvent('productFetched'));
            window.dispatchEvent(new CustomEvent('userUpdated'));
            window.dispatchEvent(new CustomEvent('usersUpdated'));
            window.dispatchEvent(new CustomEvent('wishlistFetched'));
            toast.success(
               `Product ${
                  action === 'add' ? 'added to' : 'removed from'
               } wishlist`,
               { icon: <FaCheck color="white" /> }
            );
         },
         onError: (error) => {
            toast.error(
               error ||
                  `Couldn't ${action === 'add' ? 'add' : 'remove'} product`
            );
         },
         onFinally: () => {
            setLoadingWishlist(false);
         },
      });
   };

   const handleBagAction = async (action: 'add' | 'remove') => {
      if (!user) {
         router.push(`/auth/log-in/?redirect=${encodeURIComponent(pathname)}`);
         return;
      }

      if (!productData?._id) {
         toast.error('Product ID not found');
         return;
      }

      setLoadingBag(true);

      await apiRequest({
         url:
            '/api/bag/' + (action === 'add' ? 'add-to-bag' : 'remove-from-bag'),
         method: action === 'add' ? 'POST' : 'DELETE',
         body: {
            furnitureId: room_type,
            groupId: furniture_type,
            typeId: furniture_sub,
            productId: productData?._id,
            stockCount:
               productData?.options?.[selectedOption]?.stock?.stock_count,
            userId: user?._id,
            selectedOption,
            quantity: quantity,
         },
         onSuccess: () => {
            window.dispatchEvent(new CustomEvent('productFetched'));
            window.dispatchEvent(new CustomEvent('userUpdated'));
            window.dispatchEvent(new CustomEvent('usersUpdated'));
            toast.success(
               `Product ${action === 'add' ? 'added to' : 'removed from'} bag`,
               { icon: <FaCheck color="white" /> }
            );
         },
         onError: (error) => {
            toast.error(
               error ||
                  `Couldn't ${
                     action === 'add' ? 'add' : 'remove'
                  } product to bag`
            );
         },
         onFinally: () => {
            setLoadingBag(false);
         },
      });
   };

   const bagged = user?.bag?.some((b: any) => b.productId === productData._id);
   return (
      <div className="py-4 flex flex-col w-full gap-4">
         <div className="flex items-center justify-between ">
            <div
               className="text-xs uppercase  neue-bold tracking-widest flex gap-4 items-center  relative font-bold "
               onClick={toggleQuantity}
            >
               <span className="leading-none tracking-wider">
                  Qty: <span className="pl-1">{quantity}</span>
               </span>
               <button
                  className={`p-[3px]   border-b-[1px] border-r-[1px]   border-black duration-150  ${
                     isQuantityVisible ? ' rotate-[225deg]' : ' rotate-[45deg] '
                  }`}
               ></button>
               {Quantity && (
                  <div
                     className={` items-start   bg-white absolute top-4  shadow-lg  w-[100px]  overflow-hidden grid grid-cols-2  ${
                        isQuantityVisible ? ' opacity-100' : ' opacity-0 '
                     } `}
                     ref={QuantityRef}
                  >
                     {quantities.map((qty: number, index: number) => (
                        <button
                           className="w-full   py-3 bg-white hover:bg-lightGrey text-xs text-grey  text-center "
                           key={qty}
                           onClick={() => {
                              setQuantity(index + 1);
                              toggleQuantity();
                           }}
                        >
                           {qty}
                        </button>
                     ))}
                  </div>
               )}
            </div>

            <h1 className="text-xs font-bold text-[#1e372f]">
               {/* @ts-ignore */}
               {productData?.options[selectedOption]?.stock?.in_stock
                  ? 'In stock'
                  : /* @ts-ignore */
                    `In Stock in ${productData?.options[selectedOption]?.stock?.when_in_stock}`}
            </h1>
         </div>
         <button
            className={`flex items-center justify-center  gap-2 h-[40px]  bg-green text-center uppercase    text-xs text-white tracking-widest hover:ring-[2px] ring-green ring-offset-[1px] duration-150 ${
               !productData?.options[selectedOption]?.stock?.in_stock &&
               'opacity-60'
            }`}
            onClick={() => {
               setProductId(productData?._id);
               handleBagAction(bagged ? 'remove' : 'add');
            }}
            disabled={
               loadingBag ||
               !productData?.options[selectedOption]?.stock?.in_stock
            }
         >
            <Image
               src={loadingBag ? loadingWhite : bag}
               className="w-4"
               alt=""
            />
            {loadingBag
               ? bagged
                  ? 'Removing...'
                  : 'Adding...'
               : bagged
               ? 'Remove from bag'
               : 'Add to bag'}
         </button>
         <button
            className="flex items-center justify-center gap-2 h-[40px] text-center uppercase text-xs text-darkGrey tracking-widest hover:ring-[1px] ring-darkGrey ring-offset-[1px] duration-150 border"
            onClick={() => {
               setProductId(productData?._id);
               handleWishlistAction(wishlisted ? 'remove' : 'add');
            }}
            disabled={loadingWishlist}
         >
            {loadingWishlist
               ? wishlisted
                  ? 'Removing'
                  : 'Adding'
               : wishlisted
               ? 'Remove from wishlist'
               : 'Add to wishlist'}
            <Image
               src={loadingWishlist ? loadingIcon : heart}
               className="w-4"
               alt=""
            />
         </button>
      </div>
   );
};

export default CartWishlistQuantity;
