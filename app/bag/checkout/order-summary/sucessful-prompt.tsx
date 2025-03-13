import Image from 'next/image';
import sucessIcon from '~/public/icons/sucessmark.svg';
import loadingIcon from '~/public/icons/double-loading.svg';
import Link from 'next/link';
import { useUser } from '~/app/context/auth-context';
const SuccessPrompt = (props: any) => {
   const {
      sucessful,
      isSucessfulVisible,
      sucessfulRef,
      recieptSucessful,
      totalPrice,
      delivery,
      paymentSuccess,
      recieptError,
   } = props;
   const { user } = useUser();
   return (
      sucessful && (
         <div
            className={`fixed bottom-[0px]  h-full w-full  z-50 left-0 flex  justify-center  items-center        backdrop-brightness-50  px-8     xs:px-0 `}
         >
            <div
               className={`w-[350px]     mid-popup   duration-300 ease-in-out flex flex-col py-6 px-6  gap-4   rounded-lg bg-greyGreen  items-center      ${
                  isSucessfulVisible ? '' : 'mid-popup-hidden'
               }  `}
               ref={sucessfulRef}
            >
               <div className="flex flex-col gap-5  w-full">
                  <div className="flex flex-col gap-3 items-center w-full">
                     <Image src={sucessIcon} alt="" className="w-24" />

                     <div className="flex flex-col gap-2 w-full">
                        <h1 className="text-2xl louize text-center">
                           Payment Successful!
                        </h1>

                        {paymentSuccess && (
                           <p className="text-sm neue-light  text-center">
                              Your payment of ₦{' '}
                              {delivery === 'pick-up'
                                 ? (totalPrice + 10).toLocaleString('en-US')
                                 : (totalPrice + 20).toLocaleString(
                                      'en-US'
                                   )}{' '}
                              has been processed successfully.
                           </p>
                        )}
                        {recieptSucessful ? (
                           <div className="w-full ">
                              <h1 className="text-sm   text-grey text-center ">
                                 A reciept has been sent to your email (
                                 {user?.email}).
                              </h1>
                           </div>
                        ) : recieptError ? (
                           <div className="flex flex-col gap-2 items-center justify-center ">
                              <h1 className="text-xs  uppercase text-grey text-center ">
                                 {recieptError}
                              </h1>
                           </div>
                        ) : (
                           <div className="flex flex-col gap-2 items-center justify-center ">
                              <Image
                                 src={loadingIcon}
                                 alt=""
                                 className="w-12 mx-auto"
                              />
                              <h1 className="text-xs  uppercase text-grey text-center ">
                                 Sending reciept...
                              </h1>
                           </div>
                        )}
                     </div>
                  </div>
                  <Link
                     href="/"
                     className="bg-softGreen    text-white px-4 py-4  rounded-md  hover:ring-[2px] hover:ring-offset-1  ring-softGreen    duration-300  gap-1 neue-light  text-xs w-full text-center"
                  >
                     CONTINUE SHOPPING
                  </Link>
               </div>
            </div>
         </div>
      )
   );
};

export default SuccessPrompt;
