'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import loader from '~/public/images/loading.svg';
import sucess from '~/public/icons/check.svg';
import { useUser } from '~/app/context/auth-context';

const VerifyEmail = () => {
   const [error, setError] = useState('');

   const { createPassword, setCreatePassword } = useUser();
   const [email, setEmail] = useState('');

   const [submitting, setSubmitting] = useState(false);
   const [sucessful, setSucesssful] = useState(false);
   const check = !email;
   const handleSubmit = async (e: any) => {
      e.preventDefault();
      if (check) {
         setSubmitting(false);
         setError('Email is required');
         return;
      }
      setError('');

      setSubmitting(true);
      try {
         const res = await fetch('/api/auth/forgot-password/check-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
         });

         if (res.ok) {
            setSubmitting(false);
            setSucesssful(true);
            localStorage.setItem('email', email);
            setTimeout(
               (window.location.href = '/auth/forgot-password/verify-email'),
               3000
            );
         } else {
            const data = await res.json();
            setError(data.error || 'Reset password failed');
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
                  {createPassword ? 'Set' : 'Forgot'} password
               </h1>
               <h1 className="text-sm text-center text-grey">
                  You’re about to {createPassword ? 'set' : 'reset'} your
                  password. Enter your email so we send instructions to{' '}
                  {createPassword ? 'set' : 'reset'} your password.
               </h1>
            </div>
            <div className="flex flex-col gap-4     items-center justify-center w-full ">
               <div className="flex flex-col gap-1 w-full ">
                  <label
                     htmlFor="email"
                     className="text-sm   neue    text-darkGrey "
                  >
                     Email
                  </label>
                  <input
                     className={`h-[40px] py-1 px-3 bg-white  text-black  text-sm  border  focus:ring-[1px]    ring-black  outline-none w-full border-grey duration-150  focus:rounded-sm `}
                     id="email"
                     type="email"
                     value={email}
                     onChange={(e) => {
                        setEmail(e.target.value);
                        setError('');
                     }}
                     placeholder="Email address"
                     name="email"
                     required
                  />
               </div>

               {error && (
                  <span className="text-center text-sm text-red">{error}</span>
               )}
               <button
                  onClick={handleSubmit}
                  className="bg-green w-full  text-center text-xs   neue  h-10  text-white  hover:ring ring-offset-[1px] hover:ring-[2px]  ring-green duration-300  mt-5  "
                  disabled={submitting}
               >
                  {sucessful ? (
                     <Image src={sucess} alt="" className="w-5  mx-auto" />
                  ) : submitting ? (
                     <Image src={loader} alt="" className="w-7 mx-auto" />
                  ) : (
                     'CONTINUE'
                  )}
               </button>
            </div>

            <Link href={'/'} className="underline text-sm text-green ">
               Return to store
            </Link>
         </div>
      </div>
   );
};

export default VerifyEmail;
