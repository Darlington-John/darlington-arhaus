'use client';
import Image from 'next/image';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';
import sucess from '~/public/icons/check.svg';
import eyeoff from '~/public/icons/eye-off.svg';
import eye from '~/public/icons/eye.svg';
import googleIcon from '~/public/icons/google.svg';
import loader from '~/public/images/loading.svg';
interface FormData {
   email: string;
   password: string;
   firstName: string;
   lastName: string;
}

const SignUp = () => {
   const [isPasswordVisible, setIsPasswordVisible] = useState<any>(false);
   const [error, setError] = useState('');

   const router = useRouter();
   const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
   };
   const [formData, setFormData] = useState<FormData>({
      email: '',
      password: '',
      firstName: '',
      lastName: '',
   });

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setError('');
   };
   const [submitting, setSubmitting] = useState(false);
   const [sucessful, setSucesssful] = useState(false);
   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (submitting) return;
      setError('');
      setSubmitting(true);

      try {
         const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
         });

         if (!res.ok) {
            const error = await res.json();
            setError(error?.error || 'An error occurred during signup.');
            return;
         }
         const data = await res.json();
         window.dispatchEvent(new CustomEvent('userUpdated'));
         window.dispatchEvent(new CustomEvent('usersUpdated'));
         document.cookie = `email=${data.email}; Path=/; HttpOnly`;
         localStorage.setItem('email', data.email);

         setSucesssful(true);
         const redirectUrl =
            new URLSearchParams(window.location.search).get('redirect') || '/';

         setTimeout(() => {
            router.push(
               `/auth/verify-email?redirect=${encodeURIComponent(redirectUrl)}`
            );
         }, 3000);
      } catch (err: any) {
         setError(err.message || 'Something went wrong.');
      } finally {
         setSubmitting(false);
      }
   };
   const handleSignIn = async () => {
      const redirectUrl =
         new URLSearchParams(window.location.search).get('redirect') || '/';
      await signIn('google', { callbackUrl: redirectUrl });
   };
   const redirectUrl =
      new URLSearchParams(window.location.search).get('redirect') || '/';
   const handleLoginRedirect = () => {
      router.push(`/auth/log-in?redirect=${encodeURIComponent(redirectUrl)}`);
   };

   return (
      <div className="flex w-full items-center justify-center  h-full bg-white  min-h-screen  relative pt-20 pb-10 px-4">
         <div className="flex-col gap-8  w-[400px]  flex items-center relative z-10   bg-[#fffffff5] py-4 px-4  rounded-sm ">
            <h1 className="  neue-thin tracking-wide text-center text-[40px] uppercase  pb-0 md:text-3xl ">
               create account
            </h1>

            <form
               className="flex flex-col gap-4     items-center justify-center w-full "
               onSubmit={handleSubmit}
            >
               <div className="flex w-full gap-3 2xs:flex-col">
                  <div className="flex flex-col gap-1 w-[50%] 2xs:w-full">
                     <label
                        htmlFor="firstName"
                        className="text-sm  neue   text-darkGrey"
                     >
                        First Name
                     </label>
                     <input
                        className="h-[40px] py-1 px-3 bg-transparent  text-black  text-sm  border  focus:ring-[1px]    ring-black  outline-none w-full border-grey duration-150  focus:rounded-sm "
                        placeholder="Your first name"
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        required
                        onChange={handleChange}
                     />
                  </div>
                  <div className="flex flex-col gap-1 w-[50%] 2xs:w-full ">
                     <label
                        htmlFor="lastName"
                        className="text-sm  neue   text-darkGrey"
                     >
                        Last Name
                     </label>
                     <input
                        className="h-[40px] py-1 px-3 bg-transparent  text-black  text-sm  border  focus:ring-[1px]    ring-black  outline-none w-full border-grey duration-150  focus:rounded-sm"
                        placeholder="Your last name"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        required
                        onChange={handleChange}
                     />
                  </div>
               </div>
               <div className="flex flex-col gap-1 w-full ">
                  <label
                     htmlFor="email"
                     className="text-sm   neue    text-darkGrey "
                  >
                     Email
                  </label>
                  <input
                     className={`h-[40px] py-1 px-3 bg-transparent   text-black  text-sm  border  focus:ring-[1px]    ring-black  outline-none w-full border-grey duration-150  focus:rounded-sm  ${
                        error === 'This email is already in use.'
                           ? 'border-red pr-8'
                           : 'border-[#DFDDE3]'
                     }`}
                     placeholder="Email address"
                     type="email"
                     id="email"
                     name="email"
                     value={formData.email}
                     required
                     onChange={handleChange}
                  />
                  {error === 'This email is already in use, login instead.' && (
                     <span className="text-xs   neue    text-red ">
                        {error}
                     </span>
                  )}
               </div>
               <div className="flex flex-col gap-1 w-full ">
                  <label
                     htmlFor="password"
                     className="text-sm    neue     text-darkGrey"
                  >
                     Password
                  </label>
                  <div className="relative w-full flex items-center justify-center">
                     <input
                        className="h-[40px] py-1 pl-3 pr-8   text-black  text-sm  border   outline-none   w-full line-clamp-1  border  focus:ring-[1px]    ring-black  outline-none w-full border-grey duration-150  focus:rounded-sm bg-transparent "
                        required
                        type={isPasswordVisible ? 'text' : 'password'}
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                     />
                     <Image
                        src={isPasswordVisible ? eyeoff : eye}
                        alt=""
                        className="w-5 absolute  right-2 cursor-pointer "
                        onClick={togglePasswordVisibility}
                     />
                  </div>
               </div>
               {error === 'An error occurred during signup.' && (
                  <span className="text-center text-sm text-red">{error}</span>
               )}
               <button
                  type="submit"
                  className="bg-green w-full  text-center text-xs   neue  h-10  text-white  hover:ring ring-offset-[1px] hover:ring-[2px]  ring-green duration-300  mt-5  "
               >
                  {sucessful ? (
                     <Image src={sucess} alt="" className="w-5  mx-auto" />
                  ) : submitting ? (
                     <Image src={loader} alt="" className="w-7 mx-auto" />
                  ) : (
                     'CREATE'
                  )}
               </button>
               <button
                  type="button"
                  onClick={handleSignIn}
                  className="bg-transparent  w-full  text-center text-xs   neue  h-10  text-white border border-green   hover:ring ring-offset-[0px] hover:ring-[1px]  ring-green duration-300  flex items-center justify-center gap-2  "
               >
                  <Image src={googleIcon} alt="" className="w-6" />
                  <span className="text-sm text-black  neue ">
                     Sign in with Google
                  </span>
               </button>
            </form>

            <button
               onClick={handleLoginRedirect}
               className="underline text-sm text-green "
            >
               Login instead?
            </button>
         </div>
      </div>
   );
};

export default SignUp;
