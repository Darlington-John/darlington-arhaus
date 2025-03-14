import { usePopup } from '~/lib/utils/toggle-popups';
import { Accordion } from '../accordion';
import Options from './options';
import Dimensions from './dimensions';
import { useUser } from '~/app/context/auth-context';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { apiRequest } from '~/lib/utils/api-request';
import { toast } from 'react-toastify';
import { FaCheck } from 'react-icons/fa';
import CartWishlistQuantity from './cart-wishlist-quantity';
const ProductMenu = (props: any) => {
   const {
      productData,
      selectedOption,
      handleMouseEnter,
      handleMouseLeave,
      handleOptionClick,
      activeOption,
      isVisible,
      hideTimeout,
      quantities,
      quantity,
      toggleQuantity,
      isQuantityVisible,
      Quantity,
      QuantityRef,
      setQuantity,
      matchRef,
   } = props;

   const optionsProps = {
      productData,
      selectedOption,
      handleMouseEnter,
      handleMouseLeave,
      handleOptionClick,
      activeOption,
      isVisible,
      hideTimeout,
   };

   const accordionProps = { productData };
   const {
      isVisible: isDimensionsVisible,
      isActive: dimensions,
      ref: dimensionsRef,
      togglePopup: toggleDimensions,
   } = usePopup();
   const dimensionsProps = {
      dimensions,
      isDimensionsVisible,
      dimensionsRef,
      toggleDimensions,
      productData,
   };

   const { loading, user } = useUser();
   const router = useRouter();
   const pathname = usePathname();
   const [adding, setAdding] = useState(false);
   const [added, setAdded] = useState(false);
   const [error, setError] = useState('');
   const [name, setName] = useState(productData?.name);
   const [productId, setProductId] = useState(productData?._id);
   const [inStock, setInStock] = useState(true);
   const [whenInStock, setWhenInStock] = useState('');
   const [stockCount, setStockCount] = useState(0);
   const [upholstery, setUpholstery] = useState(productData?.fabric);
   const [option, setOption] = useState('');
   const [preview, setPreview] = useState('');
   const [price, setPrice] = useState(productData?.price);
   const [cancelledPrice, setCancelledPrice] = useState(
      productData?.cancelled_price
   );
   const handleAddToCart = async () => {
      if (adding) return;

      if (!user) {
         router.push(`/auth/log-in/?redirect=${encodeURIComponent(pathname)}`);
         return;
      }

      let check;
      if (inStock) {
         check = !(
            name &&
            productId &&
            stockCount > 0 &&
            upholstery &&
            option &&
            preview &&
            price &&
            cancelledPrice
         );
      } else {
         check = !(
            name &&
            productId &&
            stockCount &&
            upholstery &&
            option &&
            preview &&
            price &&
            cancelledPrice &&
            whenInStock
         );
      }
      if (check) {
         setError('Missing required fields');
         return;
      }
      setAdding(true);
      await apiRequest({
         url: '/api/cart/add-to-cart',
         method: 'POST',
         body: {
            userId: user._id,
            name,
            productId,
            inStock,
            whenInStock,
            stockCount,
            upholstery,
            option,
            preview,
            price,
            cancelledPrice,
         },
         onSuccess: () => {
            window.dispatchEvent(new CustomEvent('productFetched'));
            window.dispatchEvent(new CustomEvent('userUpdated'));
            window.dispatchEvent(new CustomEvent('usersUpdated'));
            setAdded(true);
            toast.success(`Product added to bag`, {
               icon: <FaCheck color="white" />,
            });
         },
         onError: (error) => {
            toast.error(error || "Couldn't add product to bag");
         },
         onFinally: () => {
            setAdding(false);
         },
      });
   };
   const cartWishlistProps = {
      toggleQuantity,
      quantity,
      isQuantityVisible,
      QuantityRef,
      Quantity,
      quantities,
      setQuantity,
      selectedOption,
      setOption,
      setProductId,
      productData,
      setInStock,
      setStockCount,
      setWhenInStock,
      setPreview,
      handleAddToCart,
      productId,
   };
   return (
      <div className="flex  w-full gap-4 w-[40%] flex-col gap-6  px-8  divide-y divide-lightGrey  lg:px-2  md:px-4 ">
         <div className="flex   flex-col gap-1">
            <h1 className="neue-thin text-[32px] text-darkGrey  capitalize  text-black  xl:text-2xl  leading-tight dxs:text-[20px] dxs:leading-snug">
               {productData?.name}
            </h1>
            <div className="flex gap-4 items-center">
               <span className="text-darkRed">
                  $
                  {productData?.price != null
                     ? productData?.price.toLocaleString('en-US')
                     : 'N/A'}
               </span>
               <span className="text-sm neue-light text-grey  line-through">
                  $
                  {productData?.cancelled_price != null
                     ? productData?.cancelled_price.toLocaleString('en-US')
                     : 'N/A'}
               </span>
            </div>
         </div>
         <div className="py-4 flex flex-col  gap-4">
            <div className="flex items-center gap-2">
               <h1 className="text-xs uppercase   tracking-widest  font-bold">
                  {productData?.fabric ? (
                     'Fabric:'
                  ) : productData?.leather ? (
                     'Leather:'
                  ) : productData?.finish ? (
                     'Finish:'
                  ) : (
                     <span className="text-red">No Upholstery or finish</span>
                  )}
               </h1>
               <h1 className="text-darkGrey uppercase text-sm neue-light ">
                  {productData?.options[selectedOption]?.option || '_'}
               </h1>
            </div>

            <Options {...optionsProps} />
         </div>
         <CartWishlistQuantity {...cartWishlistProps} />
         <Dimensions {...dimensionsProps} />
         <div className="flex flex-col w-full gap-2 py-3 px-4 items-start lg:px-0">
            <Accordion {...accordionProps} />
         </div>
      </div>
   );
};

export default ProductMenu;
