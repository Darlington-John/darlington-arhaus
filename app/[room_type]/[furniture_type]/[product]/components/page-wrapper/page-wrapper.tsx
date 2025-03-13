import React from 'react';
import Image from 'next/image';
import loadingGif from '~/public/icons/double-loading-black.svg';
import boxEmpty from '~/public/icons/empty-box.svg';
interface PageWrapperProps {
   fetching: boolean;
   errorFetching: boolean;

   children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
   fetching,
   errorFetching,

   children,
}) => {
   return errorFetching ? (
      <div className="flex items-center mx-auto flex-col py-20  ">
         <Image src={boxEmpty} className="w-20" alt="Error icon" />
         <p className="neue-thin text-2xl text-darkGrey uppercase text-black spaced text-center leading-none">
            Error fetching products
            <br />
            <span className="text-base normal-case neue-thin tracking-normal">
               Try Checking Your Internet Connection
            </span>
         </p>
      </div>
   ) : fetching ? (
      <div className="bg-white h-[40vh] w-full flex items-center justify-center opacity-20">
         <Image src={loadingGif} alt="Loading" className="w-16  md:w-10" />
      </div>
   ) : (
      children
   );
};

export default PageWrapper;
