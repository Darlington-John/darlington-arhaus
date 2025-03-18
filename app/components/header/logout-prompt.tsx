import Image from 'next/image';
import { useState } from 'react';
import check from '~/public/icons/check.svg';
import loader from '~/public/icons/loading-white.svg';
import waving from '~/public/icons/waving.svg';
const LogoutPrompt = (props: any) => {
   const {
      isLogoutPromptVisible,
      logoutPrompt,
      logoutPromptRef,
      toggleLogoutPromptPopup,
   } = props;
   const [sucessful, setSucessful] = useState(false);
   const [clearing, setClearing] = useState(false);
   const clearCookies = async () => {
      try {
         const response = await fetch('/api/clear-cookies', {
            method: 'POST',
            credentials: 'include',
         });
         setClearing(true);
         if (!response.ok) {
         }

         window.dispatchEvent(new CustomEvent('userUpdated'));
         setTimeout(() => setSucessful(true), 3000);
         setTimeout(() => toggleLogoutPromptPopup(), 4000);
         setTimeout(() => setSucessful(false), 5000);
         setTimeout(() => setSucessful(false), 5000);
      } catch (error) {
         console.error('Error clearing cookies:', error);
      }
   };
   return (
      logoutPrompt && (
         <div
            className={`fixed top-[0px]  h-full w-full  z-50 left-0 flex  justify-center  items-center        backdrop-brightness-50  px-8     xs:px-0 `}
         >
            <div
               className={`w-[300px]     mid-popup   duration-300 ease-in-out flex flex-col py-6 px-6  gap-4   rounded-lg bg-white   items-center      ${
                  isLogoutPromptVisible ? '' : 'mid-popup-hidden'
               }`}
               ref={logoutPromptRef}
            >
               <div className="flex flex-col  items-center">
                  <Image src={waving} className="w-20" alt="" />
                  <div className="flex flex-col gap-0">
                     <h1 className="text-[27px]  louize   text-center">
                        See you soon
                     </h1>
                     <p className="text-sm neue-light text-center">
                        You are about to logout.
                        <br />
                        Are you sure that&apos;s what you want?
                     </p>
                  </div>
               </div>
               <div className="flex items-center gap-2  w-full">
                  <button
                     className="flex items-center justify-center  gap-2  h-[40px]  px-2 rounded-md bg-softGreen  duration-150 hover:ring hover:ring-[2px]  ring-softGreen ring-offset-[1px]  text-center w-[60%]"
                     onClick={clearCookies}
                  >
                     <span className=" text-white uppercase  text-xs  text-center">
                        {sucessful ? (
                           <Image src={check} alt="" className="w-6" />
                        ) : clearing ? (
                           <Image src={loader} alt="" className="w-6" />
                        ) : (
                           'Confirm logout'
                        )}
                     </span>
                  </button>
                  <button
                     onClick={() => {
                        toggleLogoutPromptPopup();
                     }}
                     className="bg-grey   text-white px-4 h-[40px]  rounded-md  hover:ring-[2px] hover:ring-offset-1  ring-grey   duration-300  gap-1 neue-light  text-xs w-[40%] "
                  >
                     CANCEL
                  </button>
               </div>
            </div>
         </div>
      )
   );
};

export default LogoutPrompt;
