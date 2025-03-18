'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import loader from '~/public/images/loading.svg';
import Link from 'next/link';
import sucessIcon from '~/public/icons/check.svg';
const VerifyEmail = () => {
   const [error, setError] = useState('');
   const [isVerifying, setIsVerifying] = useState(false);
   const [email, setEmail] = useState<string | null>(null);
   const [verificationCode, setVerificationCode] = useState(Array(4).fill(''));
   const [isSucessful, setIsSucessful] = useState(false);
   useEffect(() => {
      const storedEmail = localStorage.getItem('email');
      if (storedEmail) {
         setEmail(storedEmail);
      } else {
         setError('Email not found. Please go back to sign up.');
      }
   }, []);
   const isVerificationCodeComplete = () => {
      return verificationCode.every((digit) => digit.length === 1);
   };

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement>,
      index: number
   ) => {
      setError('');
      const value = e.target.value;

      if (/^[0-9]$/.test(value) || value === '') {
         const newCode = [...verificationCode];
         newCode[index] = value;
         setVerificationCode(newCode);

         if (value && index < 5) {
            document.getElementById(`code-input-${index + 1}`)?.focus();
         }
      }
   };

   const handleKeyDown = (
      e: React.KeyboardEvent<HTMLInputElement>,
      index: number
   ) => {
      if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
         document.getElementById(`code-input-${index - 1}`)?.focus();
      }
   };
   const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pastedData = e.clipboardData.getData('Text').trim();
      const isValid = /^[0-9]*$/.test(pastedData);

      if (isValid) {
         const newCode = [...verificationCode];
         pastedData.split('').forEach((char, i) => {
            if (i < newCode.length) newCode[i] = char;
         });
         setVerificationCode(newCode);

         const lastFilledIndex = Math.min(
            pastedData.length - 1,
            verificationCode.length - 1
         );
         document.getElementById(`code-input-${lastFilledIndex}`)?.focus();
      }
   };
   const handleVerify = async () => {
      if (!email) {
         setError('Email not found. Please go back to sign up.');
         return;
      }
      setError('');
      if (!isVerificationCodeComplete()) {
         setError('Please enter all 6 digits of the verification code.');
         return;
      }
      setIsVerifying(true);
      try {
         const codeString = verificationCode.join('');
         const response = await fetch('/api/auth/verify-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, verificationCode: codeString }),
         });

         const data = await response.json();

         if (response.ok) {
            const { token } = data;
            document.cookie = `token=${token}; path=/; secure; HttpOnly`;
            localStorage.removeItem('email');
            setIsSucessful(true);
            const redirectUrl =
               new URLSearchParams(window.location.search).get('redirect') ||
               '/';
            setTimeout(() => {
               window.location.href = redirectUrl;
            }, 3000);
         } else {
            setError(data.error || 'Verification failed');
         }
      } catch (error) {
         setError('An error occurred during verification');
      } finally {
         setIsVerifying(false);
      }
   };

   return (
      <div className="flex w-full items-center justify-center  h-full bg-white  min-h-screen  relative px-4 pb-10 ">
         <div className="flex-col gap-6   w-[400px]  flex items-center relative z-10   bg-[#fffffff5] py-4 px-4  rounded-sm ">
            <h1 className="  neue-thin tracking-wide text-center text-[40px] uppercase  leading-none md:text-3xl ">
               verification
            </h1>

            <div className="flex flex-col gap-4 w-full  items-center">
               <h1 className="text-base   text-black  leading-6  text-center md:text-sm">
                  We've sent you a mail at:
                  <br />
                  <span className="neue font-semibold text-sm  ">{email}</span>
                  <br />
                  Enter the code in the field below
               </h1>
               <div className="flex flex-col">
                  <div className="flex justify-between gap-2 w-full text-white">
                     {verificationCode.map((digit, index) => (
                        <input
                           key={digit}
                           id={`code-input-${index}`}
                           type="text"
                           value={digit}
                           onChange={(e) => handleChange(e, index)}
                           onPaste={handlePaste}
                           onKeyDown={(e) => handleKeyDown(e, index)}
                           maxLength={1}
                           className={`text-[22px]   outline-none px-2 py-3 rounded-md w-full bg-lightGrey text-center focus:ring-2 ring-green   w-[55px]  h-[56px] fancy text-black grow-0 shrink-0 max-w-[55px]  max-h-[56px]  ${
                              error && 'border border-red'
                           }`}
                           placeholder="*"
                        />
                     ))}
                  </div>
               </div>
               {error && (
                  <div className="flex gap-2 items-center ">
                     <div className="p-1  bg-pink rounded-full "></div>
                     <h1 className="text-sm text-red">{error}</h1>
                  </div>
               )}
               <button
                  className={`bg-green text-center text-sm  norm-mid  h-10 text-white w-full    ${
                     isVerificationCodeComplete()
                        ? 'opacity-100 hover:ring ring-offset-[1px] hover:ring-[2px]  ring-green duration-300'
                        : 'opacity-40'
                  }`}
                  disabled={isVerifying || !isVerificationCodeComplete()}
                  onClick={handleVerify}
               >
                  {isSucessful ? (
                     <Image src={sucessIcon} alt="" className="w-6 mx-auto" />
                  ) : isVerifying ? (
                     <Image src={loader} alt="" className="w-6 mx-auto" />
                  ) : (
                     'Continue'
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
