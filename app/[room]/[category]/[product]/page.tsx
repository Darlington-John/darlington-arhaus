'use client';
import 'keen-slider/keen-slider.min.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import { usePopup } from '~/lib/utils/toggle-popups';
import ProductPreview from './components/product-previews';
import ProductPriceCard from '~/app/components/cards/product-price-card';
import ProductMenu from './components/product-menu/product-menu';
import { useRooms } from '~/app/context/rooms-context';
import { motion } from 'framer-motion';
import PageWrapper from './components/page-wrapper/page-wrapper';
import { IRooms } from '~/types/rooms';

const FurniturePage = () => {
   const [productData, setProductData] = useState<any>(null);
   const { room, category, product } = useParams();
   const [fetching, setFetching] = useState(true);
   const [errorFetching, setErrorFetching] = useState(false);
   useEffect(() => {
      const fetchProductData = async () => {
         try {
            const res = await fetch(
               `/api/rooms/${room}/${category}/${product}`
            );

            if (!res.ok) {
               setErrorFetching(true);
               return;
            }
            const data = await res.json();
            setProductData(data.productData);
         } catch (error) {
            setErrorFetching(true);
         } finally {
            setFetching(false);
         }
      };
      (async () => {
         await fetchProductData();
      })();
      const handleProductFetched = () => {
         fetchProductData();
      };
      window.addEventListener('productFetched', handleProductFetched);

      return () => {
         window.removeEventListener('productFetched', handleProductFetched);
      };
   }, [room, category, product]);
   const { rooms } = useRooms() as { rooms: IRooms[] };

   const groupData = rooms?.find((data: any) => data?._id === room);

   const categoryData = groupData?.menu?.categories?.find(
      (cat: any) => cat._id === category
   );

   const filteredProducts = categoryData?.products?.filter(
      (type) => type._id !== product
   );

   const [activeOption, setActiveOption] = useState(null);
   const [selectedOption, setSelectedOption] = useState(0);
   const [isVisible, setIsVisible] = useState(false);
   const hideTimeout = useRef<any>(null);
   const handleMouseEnter = useCallback((index: any) => {
      if (hideTimeout.current) {
         clearTimeout(hideTimeout.current);
         hideTimeout.current = null;
      }
      setActiveOption(index);
      setIsVisible(true);
   }, []);

   const handleMouseLeave = useCallback(() => {
      hideTimeout.current = setTimeout(() => {
         setIsVisible(false);
         setTimeout(() => setActiveOption(null), 300);
      }, 300);
   }, []);

   const handleOptionClick = useCallback((index: any) => {
      setSelectedOption(index);
   }, []);
   const [quantity, setQuantity] = useState(1);
   const stockCount =
      productData?.options[selectedOption]?.stock?.stock_count || 0;
   const quantities = Array.from({ length: stockCount }, (_, i) => i + 1);

   const {
      isVisible: isQuantityVisible,
      isActive: Quantity,
      ref: QuantityRef,
      togglePopup: toggleQuantity,
   } = usePopup();

   const [activeIndex, setActiveIndex] = useState(0);
   const sliderRef = useRef<HTMLDivElement | null>(null);

   const productPreviewProps = {
      sliderRef,
      productData,
      selectedOption,
      activeIndex,
      setActiveIndex,
   };
   const productMenuProps = {
      productData,
      selectedOption,
      handleMouseEnter,
      handleMouseLeave,
      handleOptionClick,
      setActiveIndex,
      activeOption,
      isVisible,
      hideTimeout,
      quantities,
      quantity,
      toggleQuantity,
      isQuantityVisible,
      Quantity,
      QuantityRef,
      setQuantity,
   };

   return (
      <main className="flex w-full flex-col  pt-[180px] bg-white  pb-20 lg:pt-[100px]  sm:pt-[60px] md:pb-8  let-it-happen ">
         <PageWrapper fetching={fetching} errorFetching={errorFetching}>
            <motion.section
               className="flex  w-full gap-6 items-start h-full md:flex-col lg:gap-4"
               animate={{
                  opacity: [0, 100],
                  transition: { ease: ['easeIn', 'easeOut'] },
               }}
            >
               <ProductPreview {...productPreviewProps} />
               <ProductMenu {...productMenuProps} />
            </motion.section>
         </PageWrapper>

         {(filteredProducts ?? []).length > 0 && (
            <div className="w-full  flex flex-col gap-6 px-16 md:px-4 py-16 ">
               <h1 className="text-[24px] text-darkGrey neue-thin tracking-widest dxs:text-[20px]">
                  YOU MAY ALSO LIKE
               </h1>
               <div className="grid grid-cols-3   gap-8  md:gap-4  sm:flex sm:flex-col xl:grid-cols-2 dxs:gap-10 ">
                  {filteredProducts
                     ?.sort(() => Math.random() - 0.5)
                     .slice(0, 3)
                     .map((data: any) => (
                        <ProductPriceCard
                           data={data}
                           key={data?._id}
                           {...data}
                        />
                     ))}
               </div>
            </div>
         )}
      </main>
   );
};

export default FurniturePage;
