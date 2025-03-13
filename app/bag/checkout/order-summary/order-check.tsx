import Image from 'next/image';
import dynamic from 'next/dynamic';

import checkIcon from '~/public/icons/check.svg';
import check from '~/public/icons/check.svg';
import loader from '~/public/icons/loading-white.svg';
import { useUser } from '~/app/context/auth-context';
const PaystackButton = dynamic(
   () => import('react-paystack').then((mod) => mod.PaystackButton),
   {
      ssr: false,
   }
);
const OrderCheck = (props: any) => {
   const {
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
   } = props;
   const { user } = useUser();
   return (
      <div className="p-2 flex flex-col gap-2 ">
         {paymentSuccess ? (
            <button
               className={`w-full h-[45px] flex  items-center justify-center  gap-2 bg-softGreen rounded duration-150`}
            >
               <span className="text-xs uppercase text-white">
                  Order sucessful
               </span>
               <Image src={checkIcon} className="w-5" alt="" />
            </button>
         ) : checkSucessful ? (
            <PaystackButton
               email={user?.email}
               onSuccess={() => {
                  setPaymentSuccess(true);
                  toggleSucessful();
                  handleSendReciept();
               }}
               amount={
                  (delivery === 'pick-up' ? totalPrice + 10 : totalPrice + 20) *
                  100
               }
               publicKey={process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY as string}
               className={`w-full h-[45px] flex  items-center justify-center  gap-2 bg-softGreen rounded duration-150  ${
                  step1Complete && step2Complete
                     ? 'hover:ring-[2px] ring-offset-[1px] ring-softGreen '
                     : 'opacity-60'
               }`}
               disabled={!step1Complete && !step2Complete}
            >
               <span className="text-xs uppercase text-white">Pay</span>
            </PaystackButton>
         ) : (
            <button
               className={`w-full h-[45px] flex  items-center justify-center  gap-2 bg-green  rounded duration-150 text-white  ${
                  step1Complete && step2Complete
                     ? 'hover:ring-[2px] ring-offset-[1px] ring-green '
                     : 'opacity-60'
               }`}
               disabled={!step1Complete && !step2Complete}
               onClick={productCheck}
            >
               {checkSucessful ? (
                  <Image src={check} alt="" className="w-6" />
               ) : checkingProduct ? (
                  <Image src={loader} alt="" className="w-6" />
               ) : (
                  'Confirm Order '
               )}
            </button>
         )}
         {!(step1Complete && step2Complete) && (
            <button className="text-xs text-grey text-center">
               (Complete the steps in order to proceed)
            </button>
         )}
      </div>
   );
};

export default OrderCheck;
