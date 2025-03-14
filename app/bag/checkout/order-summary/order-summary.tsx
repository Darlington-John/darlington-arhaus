'use client';
import { useState } from 'react';
import { useUser } from '~/app/context/auth-context';
import { usePopup } from '~/lib/utils/toggle-popups';
import { apiRequest } from '~/lib/utils/api-request';
import { toast } from 'react-toastify';
import OrderCheck from './order-check';
import SuccessPrompt from './sucessful-prompt';
import ErrorPrompt from './error-prompt';
const OrderSummary = (props: any) => {
   const { user } = useUser();
   const {
      totalPrice,
      delivery,
      step1Complete,
      step2Complete,
      phone,
      addPhone,
      address,
      addInfo,
      mergedBag,
      quantities,
      city,
      selectedState,
      setCheckout,
      selectedStation,
   } = props;

   const totalQuantity = quantities.reduce(
      (sum: any, qty: any) => sum + qty,
      0
   );
   const [paymentSuccess, setPaymentSuccess] = useState(false);
   const [checkingProduct, setCheckingProduct] = useState(false);
   const [checkError, setCheckError] = useState('');
   const [checkSucessful, setCheckSucessful] = useState(false);
   const [insufficientProducts, setInsufficientProducts] = useState([]);
   const {
      isVisible: isSucessfulVisible,
      isActive: sucessful,
      ref: sucessfulRef,
      togglePopup: toggleSucessful,
   } = usePopup();
   const {
      isVisible: isProductErrorVisible,
      isActive: productError,
      ref: productErrorRef,
      togglePopup: toggleProductError,
   } = usePopup();
   const [sendingReciept, setSendingReciept] = useState(false);
   const [recieptError, setRecieptError] = useState('');
   const [recieptSucessful, setRecieptSucessful] = useState(false);
   const filterProductData = (product: any) => {
      const allowedFields = [
         'typeId',
         'groupId',
         'furnitureId',
         'productId',
         'quantity',
         'initial_stock_count',
         'selected_option',
         '_id',
         'name',
         'price',
         'cancelled_price',
      ];

      return Object.fromEntries(
         Object.entries(product).filter(([key]) => allowedFields.includes(key))
      );
   };
   const filteredProduct = mergedBag.map(filterProductData);
   const productCheck = async () => {
      if (checkingProduct && !checkSucessful) return;
      const check = !user?._id;
      if (check) {
         setCheckError('UserId not found');
         return;
      }
      setCheckingProduct(true);
      setCheckError('');
      await apiRequest({
         url: '/api/check-products',
         method: 'POST',
         body: {
            userId: user?._id,
            products: filteredProduct,
         },
         onSuccess: () => {
            setCheckSucessful(true);
         },
         onError: (error: any) => {
            toggleProductError();
            setCheckError('error');
            setInsufficientProducts(error);
         },
         onFinally: () => {
            setCheckingProduct(false);
         },
      });
   };
   const handleSendReciept = async () => {
      if (sendingReciept && !sucessful) return;
      const check = !user?._id;
      if (check) {
         setRecieptError('UserId not found');
         return;
      }
      setSendingReciept(true);
      setRecieptError('');
      await apiRequest({
         url: '/api/send-reciept',
         method: 'POST',
         body: {
            userId: user?._id,
            userPhone: phone,
            userAddPhone: addPhone,
            products: filteredProduct,
            address,
            city,
            state: selectedState,
            addInfo,
            delivery,
            totalPrice,
            deliveryFee: delivery === 'pick-up' ? 10 : 20,
            totalPaid:
               delivery === 'pick-up' ? totalPrice + 10 : totalPrice + 20,
            selectedStation,
         },
         onSuccess: () => {
            setRecieptSucessful(true);
            window.dispatchEvent(new CustomEvent('ordersUpdated'));
         },
         onError: (error) => {
            toast.error(error);
            setRecieptSucessful(false);
            setRecieptError(error);
         },
         onFinally: () => {
            setSendingReciept(false);
         },
      });
   };

   const orderCheckProps = {
      paymentSuccess,
      checkSucessful,
      setPaymentSuccess,
      totalPrice,
      toggleSucessful,
      handleSendReciept,
      delivery,
      step1Complete,
      step2Complete,
      productCheck,
      checkingProduct,
   };

   const sucessPromptProps = {
      sucessful,
      isSucessfulVisible,
      sucessfulRef,
      sendingReciept,
      recieptSucessful,
      totalPrice,
      delivery,
      paymentSuccess,
      recieptError,
   };
   const errorPromptProps = {
      productError,
      isProductErrorVisible,
      productErrorRef,
      insufficientProducts,
      setCheckout,
      toggleProductError,
      checkError,
   };
   return (
      <div
         className="w-[40%] flex flex-col border border-lightGrey 
      rounded bg-white  divide-y  divide-lightGrey md:w-full"
      >
         {mergedBag?.map((product: any, index: number) => (
            <div
               className="w-full  flex items-start  justify-between gap-4 p-2   "
               key={product?._id}
            >
               <div className="flex items-start gap-3 ">
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
                     className="w-20"
                     onClick={toggleProductError}
                  />
                  <div className="flex flex-col gap-1">
                     <h1 className="neue-light  text-xs line-clamp-1 ">
                        {product?.name}
                     </h1>
                     <h1 className="neue-thin  text-[10px]  uppercase">
                        {product?.fabric
                           ? 'Fabric'
                           : product?.leather
                           ? 'Leather'
                           : product?.finish
                           ? 'Finish'
                           : '_'}
                        :{'   '}
                        {product?.options?.[product?.selected_option]?.option}
                     </h1>
                     <span className="neue-bold   text-[12px] ">
                        Qty: <span className="pl-1">{quantities[index]}</span>
                     </span>
                  </div>
               </div>
               <div className="text-xs    spaced   text-end shrink-0 flex flex-col gap-2">
                  <h1 className="neue-light  text-xs  text-[#89331c]  ">
                     ₦
                     {product?.price && quantities[index] !== undefined
                        ? (product.price * quantities[index]).toLocaleString(
                             'en-US'
                          )
                        : 'N/A'}
                  </h1>
                  <h1 className="neue-light  text-xs  line-through ">
                     N
                     {product?.cancelled_price &&
                     quantities[index] !== undefined
                        ? (
                             product.cancelled_price * quantities[index]
                          ).toLocaleString('en-US')
                        : 'N/A'}
                  </h1>
               </div>
            </div>
         ))}
         <button
            className="text-xs text-end  text-[#264996] p-2"
            onClick={() => setCheckout(false)}
         >
            Edit bag
         </button>
         <div className="p-2">
            <h1 className="text-sm neue-bold">Order summary</h1>
         </div>
         <div className="p-2 flex items-center justify-between ">
            <h1 className="text-sm text-grey">Total Items ({totalQuantity})</h1>
            <h1 className="text-sm neue-bold">
               ₦{totalPrice.toLocaleString('en-US')}
            </h1>
         </div>
         <div className="p-2 flex items-center justify-between ">
            <h1 className="text-sm text-grey">Delivery fee</h1>
            <h1 className="text-sm neue-bold">
               {delivery === 'pick-up' ? '₦10' : '₦20'}
            </h1>
         </div>
         <div className="p-2 flex items-center justify-between ">
            <h1 className="text-base text-grey">Total</h1>
            <h1 className="text-base neue-bold">
               ₦
               {delivery === 'pick-up'
                  ? (totalPrice + 10).toLocaleString('en-US')
                  : (totalPrice + 20).toLocaleString('en-US')}
            </h1>
         </div>
         <OrderCheck {...orderCheckProps} />
         <SuccessPrompt {...sucessPromptProps} />
         <ErrorPrompt {...errorPromptProps} />
      </div>
   );
};

export default OrderSummary;
