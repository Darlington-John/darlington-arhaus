import Image from 'next/image';
import { useState } from 'react';
import ClassicInput from '~/app/admin/products/components/inputs/classic-input';
import { useUser } from '~/app/context/auth-context';
import pen from '~/public/icons/pen.svg';
import check from '~/public/icons/check.svg';
import loader from '~/public/icons/loading-white.svg';
import { apiRequest } from '~/lib/utils/api-request';
const ChangeName = (props: any) => {
   const { user } = useUser();
   const {
      changeName,
      changeNameRef,
      isChangeNameVisible,
      toggleChangeNamePopup,
   } = props;

   const [firstName, setFirstName] = useState(user?.firstName);
   const [lastName, setLastName] = useState(user?.lastName);
   const [error, setError] = useState('');
   const [sucessful, setSucessful] = useState(false);
   const [submitting, setSubmitting] = useState(false);

   const handleChangeName = async () => {
      if (submitting) {
         return;
      }
      if (!firstName) {
         setError('First name is required');
         return;
      }
      setError('');
      setSubmitting(true);
      await apiRequest({
         url: '/api/auth/change-name',
         method: 'PATCH',
         body: {
            firstName,
            lastName,
            email: user?.email,
         },
         onSuccess: () => {
            window.dispatchEvent(new CustomEvent('userUpdated'));
            window.dispatchEvent(new CustomEvent('usersUpdated'));
            setSucessful(true);
            setTimeout(() => {
               toggleChangeNamePopup();
               setFirstName(user?.firstName);
               setLastName(user?.lastName);
            }, 2000);
         },
         onError: (error) => {
            setError(error);
         },

         onFinally: () => {
            setSubmitting(false);
            setTimeout(() => setSucessful(false), 2000);
         },
      });
   };
   return (
      changeName && (
         <div
            className={`fixed bottom-[0px]  h-full w-full  z-50 left-0 flex  justify-center  items-center        backdrop-brightness-50  px-8     xs:px-0 `}
         >
            <div
               className={`w-[350px]     mid-popup   duration-300 ease-in-out flex flex-col py-6 px-6  gap-4   rounded-lg bg-greyGreen  items-center      ${
                  isChangeNameVisible ? '' : 'mid-popup-hidden'
               }`}
               ref={changeNameRef}
            >
               <div className="flex w-full flex-col gap-2 items-center">
                  <Image src={pen} className="w-10" alt="" />
                  <h1 className="louize  text-sm uppercase leading-none">
                     Edit your name
                  </h1>
                  <h1 className=" neue-light text-sm  leading-none text-grey">
                     Enter new name below
                  </h1>
               </div>
               <div className="flex w-full flex-col gap-2">
                  <ClassicInput
                     placeholder="name"
                     label="first name"
                     name="firstName"
                     value={firstName}
                     setValue={setFirstName}
                     errorContent="First name is required"
                     error={error}
                     setError={setError}
                  />
                  <ClassicInput
                     placeholder="last name"
                     label="last name"
                     name="lastName"
                     value={lastName}
                     setValue={setLastName}
                     errorContent="Last name is required"
                     error={error}
                     setError={setError}
                  />
               </div>
               {error && (
                  <h1 className="text-[11px] neue-light text-red text-center">
                     {error}
                  </h1>
               )}
               <div className="flex gap-3 w-full">
                  <button
                     className="flex items-center justify-center  gap-2  h-[40px]  px-2 rounded-md bg-softGreen  duration-150 hover:ring hover:ring-[2px]  ring-softGreen ring-offset-2  text-center w-[60%]"
                     onClick={handleChangeName}
                  >
                     <span className=" text-white uppercase  text-xs  text-center">
                        {sucessful ? (
                           <Image src={check} alt="" className="w-6" />
                        ) : submitting ? (
                           <Image src={loader} alt="" className="w-6" />
                        ) : (
                           'Edit'
                        )}
                     </span>
                  </button>
                  <button
                     className=" h-[40px]  px-2 rounded-md bg-green  duration-150 hover:ring hover:ring-[2px]  ring-green ring-offset-2  text-center w-[40%] text-white text-xs"
                     onClick={toggleChangeNamePopup}
                  >
                     CANCEL
                  </button>
               </div>
            </div>
         </div>
      )
   );
};

export default ChangeName;
