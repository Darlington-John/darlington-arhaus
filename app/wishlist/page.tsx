'use client';
import { useEffect, useState } from 'react';
import { useUser } from '../context/auth-context';
import PageWrapper from '../admin/components/page-wrapper';
import { motion } from 'framer-motion';
import WishlistCard from '../components/cards/wishlist-card';

const Wishlist = () => {
   const { user, loading } = useUser();
   const [wishlist, setWishlist] = useState([]);
   const [fetching, setFetching] = useState(true);
   const [errorFetching, setErrorFetching] = useState(false);

   const userId = user?._id;
   useEffect(() => {
      if (loading) {
         return;
      }

      const fetchWishlist = async () => {
         try {
            const res = await fetch(
               `/api/wishlist/get-wishlist?userId=${userId}`
            );
            if (!res.ok) {
               setErrorFetching(true);
               return;
            }
            const data = await res.json();
            setWishlist(data.wishlist);
         } catch (error) {
            setErrorFetching(true);
         } finally {
            setFetching(false);
         }
      };
      (async () => {
         await fetchWishlist();
      })();
      const handleWishlistFetched = () => {
         fetchWishlist();
      };
      window.addEventListener('wishlistFetched', handleWishlistFetched);

      return () => {
         window.removeEventListener('wishlistFetched', handleWishlistFetched);
      };
   }, [userId]);
   const mergedWishlist = user?.wishlist?.map((wish: any) => {
      const matchingProduct: any = wishlist.find(
         (product: any) => product._id === wish.productId // Match by ID
      );
      return { ...wish, ...matchingProduct };
   });
   return (
      <section className="flex w-full flex-col px-16 pt-[140px] bg-white justify-center  items-center  xl:pt-16 lg:px-6 dxs:pt-4 min-h-[50vh]">
         <PageWrapper fetching={fetching} errorFetching={errorFetching}>
            <motion.section
               className="flex flex-col w-full gap-6 max-w-[1500px]"
               animate={{
                  opacity: [0, 100],
                  transition: { ease: ['easeIn', 'easeOut'] },
               }}
            >
               <h1 className="neue-thin text-[48px] text-darkGrey uppercase text-black  spaced xl:text-[36px] sm:text-3xl  dxs:text-2xl">
                  Wishlist
               </h1>
               {mergedWishlist?.length === 0 ? (
                  <p className="text-center uppercase spaced neue-light text-sm ">
                     Your wishlist is empty.
                  </p>
               ) : (
                  <div className="  grid grid-cols-4   gap-8  md:gap-4  sm:flex sm:flex-col xl:grid-cols-3   ">
                     {mergedWishlist?.map((product: any) => (
                        <WishlistCard
                           data={product?.name}
                           {...product}
                           key={product?.name}
                        />
                     ))}
                  </div>
               )}
            </motion.section>
         </PageWrapper>
      </section>
   );
};

export default Wishlist;
