'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import loadingGif from '~/public/images/loading.svg';
import Link from 'next/link';
import eye from '~/public/icons/eye.svg';
import eyeoff from '~/public/icons/eye-off.svg';
import sucess from '~/public/icons/check.svg';
const ResetPassword = () => {
   const [error, setError] = useState('');

   const [password, setPassword] = useState('');
   const [email, setEmail] = useState('');
   const [retypePassword, setRetypePassword] = useState('');
   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
   const [isRetypedPasswordVisible, setIsRetypedPasswordVisible] =
      useState(false);
   const [submitting, setSubmitting] = useState(false);
   const [isSucessful, setIsSucessful] = useState(false);
   const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
   };
   const toggleRetypedPasswordVisibility = () => {
      setIsRetypedPasswordVisible(!isRetypedPasswordVisible);
   };
   const check = retypePassword !== password;

   const filled = !(retypePassword && password);
   useEffect(() => {
      const storedEmail = localStorage.getItem('email');
      if (storedEmail) {
         setEmail(storedEmail);
      } else {
         setError('Email not found, please return to login');
      }
   }, []);
   const handleSubmit = async (e: any) => {
      e.preventDefault();
      if (filled) {
         setError('Both fields are required');
         return;
      }
      if (check) {
         setError('Passwords don`t match');
         return;
      }
      setSubmitting(true);
      try {
         const res = await fetch('/api/auth/forgot-password/reset-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password, email }),
         });
         if (res.ok) {
            setSubmitting(false);
            setIsSucessful(true);
            setTimeout(() => {
               window.location.href = '/';
            }, 3000);
            localStorage.removeItem('email');
         } else {
            const data = await res.json();
            setError(data.error || 'Password reset failed');
            setSubmitting(false);
         }
      } catch (err) {
         setSubmitting(false);
      }
   };
   return (
      <div className="flex w-full items-center justify-center  h-full bg-white  min-h-screen  relative pt-20">
         <div className="flex-col gap-4  w-[400px]  flex items-center relative z-10   bg-[#fffffff5] py-6 px-4  rounded-sm ">
            <div className="flex flex-col gap-3">
               <h1 className="  neue-thin tracking-wide text-center text-[35px] uppercase leading-none ">
                  Reset password
               </h1>
               <h1 className="text-sm text-center text-grey">
                  Enter your new password below
               </h1>
            </div>
            <div className="flex flex-col w-full  gap-6 ">
               <div className="flex flex-col w-full gap-6 ">
                  <div className="w-full  flex  flex-col gap-1">
                     <div className="relative w-full flex items-center justify-center">
                        <input
                           className={`h-[40px] py-1 px-3 bg-transparent   text-black  text-sm  border  focus:ring-[1px]    ring-black  outline-none w-full border-grey duration-150  focus:rounded-sm  ${
                              error === 'Passwords don`t match'
                                 ? 'border-red pr-8'
                                 : 'border-grey'
                           }`}
                           type={isPasswordVisible ? 'text' : 'password'}
                           value={password}
                           onChange={(e) => {
                              setPassword(e.target.value);
                              setError('');
                           }}
                           placeholder="New password"
                           required
                        />

                        <Image
                           src={isPasswordVisible ? eyeoff : eye}
                           alt=""
                           className="w-5 absolute  right-2 cursor-pointer "
                           onClick={togglePasswordVisibility}
                        />
                     </div>
                  </div>
                  <div className="w-full  flex  flex-col gap-1">
                     <div className="relative w-full flex items-center justify-center">
                        <input
                           className={`h-[40px] py-1 px-3 bg-transparent  text-black  text-sm  border  focus:ring-[1px]    ring-black  outline-none w-full border-grey duration-150  focus:rounded-sm  ${
                              error === 'Passwords don`t match'
                                 ? 'border-red pr-8'
                                 : 'border-grey'
                           }`}
                           placeholder="Type password again"
                           value={retypePassword}
                           onChange={(e) => {
                              setRetypePassword(e.target.value);
                              setError('');
                           }}
                           type={isRetypedPasswordVisible ? 'text' : 'password'}
                           required
                        />

                        <Image
                           src={isRetypedPasswordVisible ? eyeoff : eye}
                           alt=""
                           className="w-5 absolute  right-2 cursor-pointer "
                           onClick={toggleRetypedPasswordVisibility}
                        />
                     </div>
                  </div>
               </div>
               {error && (
                  <p className="text-sm text-center  text-red">{error}</p>
               )}
               <button
                  className={`bg-green  text-center text-sm  neue   h-10  text-white w-full    ${
                     !filled
                        ? 'opacity-100 hover:ring ring-offset-[1px] hover:ring-[2px]  ring-green  duration-300'
                        : 'opacity-40'
                  }`}
                  disabled={submitting}
                  onClick={handleSubmit}
               >
                  {isSucessful ? (
                     <Image src={sucess} alt="" className="w-6  mx-auto" />
                  ) : submitting ? (
                     <Image src={loadingGif} alt="" className="w-6  mx-auto" />
                  ) : (
                     'RESET'
                  )}
                  {}
               </button>
            </div>

            <Link
               href={'/auth/log-in'}
               className="underline text-sm text-green "
            >
               Log in
            </Link>
         </div>
      </div>
   );
};

export default ResetPassword;
