'use client';
import { useEffect, useMemo, useState } from 'react';
import { useUser } from '../context/auth-context';
import PageWrapper from '../admin/components/page-wrapper';
import { motion } from 'framer-motion';
import BaggedProducts from './bagged-products/bagged-products';
import CheckOut from './checkout/checkout';
const Bag = () => {
   const { user, loading } = useUser();
   const [bag, setBag] = useState([]);
   const [fetching, setFetching] = useState(true);
   const [errorFetching, setErrorFetching] = useState(false);
   const [checkout, setCheckout] = useState(false);
   const userId = user?._id;
   useEffect(() => {
      if (loading) {
         return;
      }

      const fetchBag = async () => {
         try {
            const res = await fetch(`/api/bag/get-bag?userId=${userId}`);
            if (!res.ok) {
               setErrorFetching(true);
               return;
            }
            const data = await res.json();
            setBag(data.bag);
         } catch (error) {
            setErrorFetching(true);
         } finally {
            setFetching(false);
         }
      };
      (async () => {
         await fetchBag();
      })();
      const handleBagFetched = () => {
         fetchBag();
         window.dispatchEvent(new CustomEvent('userUpdated'));
         window.dispatchEvent(new CustomEvent('usersUpdated'));
      };
      window.addEventListener('bagFetched', handleBagFetched);

      return () => {
         window.removeEventListener('bagFetched', handleBagFetched);
      };
   }, [userId]);

   const mergedBag = useMemo(() => {
      return (
         user?.bag?.map((b: any) => {
            const matchingProduct: any = bag.find(
               (product: any) => product._id === b.productId // Match by ID
            );
            return { ...b, ...matchingProduct }; // Merge product data into wish
         }) || []
      );
   }, [user?.bag, bag]);
   const [quantities, setQuantities] = useState<number[]>([]);

   const totalPrice = useMemo(() => {
      if (!mergedBag?.length) return 0;

      return mergedBag.reduce((sum: number, product: any, index: number) => {
         const quantity = quantities[index] ?? 1; // Ensure quantity exists
         const price = product?.price ?? 0; // Ensure price exists
         return sum + price * quantity; // Add product total to sum
      }, 0);
   }, [quantities, mergedBag]);
   const totalCancelledPrice = useMemo(() => {
      if (!mergedBag?.length) return 0;

      return mergedBag.reduce((sum: number, product: any, index: number) => {
         const quantity = quantities[index] ?? 1; // Ensure quantity exists
         const price = product?.cancelled_price ?? 0; // Ensure price exists
         return sum + price * quantity; // Add product total to sum
      }, 0);
   }, [quantities, mergedBag]);
   useEffect(() => {
      if (mergedBag) {
         setQuantities(mergedBag.map((product: any) => product?.quantity || 1));
      }
   }, [mergedBag]);
   const baggedProductsProps = {
      mergedBag,
      quantities,
      setQuantities,
      totalPrice,
      totalCancelledPrice,
      setCheckout,
   };

   const checkOutProps = {
      mergedBag,
      quantities,
      setQuantities,
      totalPrice,
      totalCancelledPrice,
      setCheckout,
   };
   return (
      <section className="flex w-full flex-col px-16 pt-[140px]  justify-center  items-center  xl:pt-16 lg:px-6  dxs:px-3 dxs:pt-4 min-h-[50vh]">
         <PageWrapper fetching={fetching} errorFetching={errorFetching}>
            <motion.section
               className="flex flex-col w-full gap-6 max-w-[1500px]"
               animate={{
                  opacity: [0, 100],
                  transition: { ease: ['easeIn', 'easeOut'] },
               }}
            >
               <h1 className="neue-thin text-[48px] text-darkGrey uppercase text-black  spaced xl:text-[36px] sm:text-3xl  dxs:text-2xl">
                  {checkout ? 'checkout' : 'shopping bag'}
               </h1>
               {checkout ? (
                  <CheckOut {...checkOutProps} />
               ) : (
                  <BaggedProducts {...baggedProductsProps} />
               )}
            </motion.section>
         </PageWrapper>
      </section>
   );
};

export default Bag;
