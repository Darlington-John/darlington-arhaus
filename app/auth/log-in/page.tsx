'use client';
import Image from 'next/image';

import eye from '~/public/icons/eye.svg';
import eyeoff from '~/public/icons/eye-off.svg';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Link from 'next/link';
import loader from '~/public/images/loading.svg';
import sucess from '~/public/icons/check.svg';

import googleIcon from '~/public/icons/google.svg';
import { useUser } from '~/app/context/auth-context';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
interface FormData {
   email: string;
   password: string;
}
const Login = () => {
   const [isPasswordVisible, setIsPasswordVisible] = useState<any>(false);
   const { createPassword, setCreatePassword } = useUser();
   const [error, setError] = useState('');
   const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
   };
   const [formData, setFormData] = useState<FormData>({
      email: '',
      password: '',
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
         const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
         });

         if (!res.ok) {
            const error = await res.json();
            setError(error?.error || 'An error occurred during signup.');
            return;
         }

         window.dispatchEvent(new CustomEvent('userUpdated'));
         window.dispatchEvent(new CustomEvent('usersUpdated'));
         setSucesssful(true);

         const redirectUrl =
            new URLSearchParams(window.location.search).get('redirect') || '/';

         setTimeout(() => {
            window.location.href = redirectUrl;
         }, 3000);
      } catch (err: any) {
         setError(err.message || 'Something went wrong.');
      } finally {
         setSubmitting(false);
      }
   };
   useEffect(() => {
      if (
         error ===
         'This email is registered with Google. Please log in using Google or set a password.'
      ) {
         setCreatePassword(true);
      } else {
         setCreatePassword(false);
      }
   }, [error]);
   const [redirectUrl, setRedirectUrl] = useState('/');

   useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const redirectParam = urlParams.get('redirect') || '/';
      setRedirectUrl(redirectParam);
   }, [typeof window !== 'undefined' ? window.location.search : null]);

   const handleSignIn = async () => {
      await signIn('google', { callbackUrl: redirectUrl });
   };
   const router = useRouter();
   const handleSignupRedirect = () => {
      router.push(`/auth/sign-up?redirect=${encodeURIComponent(redirectUrl)}`);
   };
   const validErrors = [
      'An error occurred during login.',
      'No account found with this email address.',
   ];
   return (
      <div className="flex w-full items-center justify-center  h-full bg-white  min-h-screen  relative pt-20 px-4 pb-10">
         <div className="flex-col gap-8  w-[400px]  flex items-center relative z-10   bg-[#fffffff5] py-4 px-4  rounded-sm ">
            <div className="flex items-center flex-col ">
               <h1 className="  neue-thin tracking-wide text-center text-[40px] uppercase   md:text-3xl ">
                  WELCOME BACK
               </h1>
               <button
                  onClick={handleSignupRedirect}
                  className="underline text-sm text-green text-center pb-3 "
               >
                  Create account instead?
               </button>
            </div>
            <form
               className="flex flex-col gap-4     items-center justify-center w-full "
               onSubmit={handleSubmit}
            >
               <div className="flex flex-col gap-1 w-full ">
                  <label
                     htmlFor="email"
                     className="text-sm   neue    text-darkGrey "
                  >
                     Email
                  </label>
                  <input
                     className={`h-[40px] py-1 px-3 bg-white  text-black  text-sm  border  focus:ring-[1px]    ring-black  outline-none w-full border-grey duration-150  focus:rounded-sm  ${
                        error === 'No account found with this email address.' ||
                        error ===
                           'This email is registered with Google. Please log in using Google or set a password.'
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
                  {error === 'No account found with this email address.' ||
                     (error ===
                        'This email is registered with Google. Please log in using Google or set a password.' && (
                        <span className="text-xs   neue    text-red ">
                           {error}
                        </span>
                     ))}
               </div>
               <div className="flex flex-col gap-1 w-full ">
                  <label
                     htmlFor="password"
                     className={`text-sm    neue     text-darkGrey
                  `}
                  >
                     Password
                  </label>
                  <div className="relative w-full flex items-center justify-center">
                     <input
                        className={`h-[40px] py-1 px-3 bg-white  text-black  text-sm  border  focus:ring-[1px]    ring-black  outline-none w-full border-grey duration-150  focus:rounded-sm  ${
                           error === 'Incorrect password. Please try again.'
                              ? 'border-red pr-8'
                              : 'border-grey'
                        }`}
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
                  {error === 'Incorrect password. Please try again.' && (
                     <span className="text-xs   neue    text-red ">
                        {error}
                     </span>
                  )}
               </div>
               {validErrors.includes(error) && (
                  <span className="text-center text-sm text-red">{error}</span>
               )}
               <button
                  type="submit"
                  className="bg-green w-full  text-center text-xs   neue  h-10  text-white  hover:ring ring-offset-[1px] hover:ring-[2px]  ring-green duration-300  mt-5  "
                  disabled={submitting}
               >
                  {sucessful ? (
                     <Image src={sucess} alt="" className="w-5  mx-auto" />
                  ) : submitting ? (
                     <Image src={loader} alt="" className="w-7 mx-auto" />
                  ) : (
                     'LOG IN'
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

            <Link
               href={'/auth/forgot-password'}
               className="underline text-green  norm-mid  text-sm  text-center md:text-xs"
            >
               {createPassword ? 'Set password?' : 'Forgot password?'}
            </Link>
         </div>
      </div>
   );
};

export default Login;
