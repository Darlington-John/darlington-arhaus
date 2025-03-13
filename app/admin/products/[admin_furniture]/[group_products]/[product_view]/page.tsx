'use client';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';

import ProductPriceCard from '~/app/components/cards/product-price-card';

import { useRooms } from '~/app/context/rooms-context';
import { motion } from 'framer-motion';

import PageWrapper from '~/app/admin/components/page-wrapper';
import ProductMenu from './components/product-menu/product-menu/product-menu';
import ProductPreview from './components/product-preview/product-preview';

function ThumbnailPlugin(mainRef: any) {
   return (slider: any) => {
      function removeActive() {
         slider.slides.forEach((slide: any) => {
            slide.classList.remove('ring-[2px]');
         });
      }

      function addActive(idx: number) {
         const relativeIdx = slider.track.absToRel(idx);
         slider?.slides[relativeIdx]?.classList?.add('ring-[2px]');
      }

      function addClickEvents() {
         slider.slides.forEach((slide: any, idx: number) => {
            slide.removeEventListener('click', handleClick);
            slide.addEventListener('click', handleClick);

            function handleClick() {
               if (mainRef.current) {
                  mainRef.current.moveToIdx(idx);
               }
            }
         });
      }

      const refreshThumbnailState = () => {
         if (!mainRef.current) return;

         const activeIdx = mainRef?.current?.track?.details?.rel || 0;
         removeActive();
         addActive(activeIdx);
         addClickEvents();
      };

      slider.on('created', refreshThumbnailState);
      slider.on('updated', refreshThumbnailState);
   };
}

const FurniturePage = () => {
   const [productData, setProductData] = useState<any>(null);

   const { admin_furniture, group_products, product_view } = useParams();
   const [fetching, setFetching] = useState(true);
   const [errorFetching, setErrorFetching] = useState(false);

   useEffect(() => {
      const fetchProductData = async () => {
         try {
            const res = await fetch(
               `/api/admin/${admin_furniture}/${group_products}/${product_view}`
            );

            const data = await res.json();
            if (res.ok) {
               setProductData(data.productData);
               setFetching(false);
            } else {
               setErrorFetching(true);
            }
         } catch (error) {
            console.log('Error during fetching:', error);
         }
      };
      (async () => {
         await fetchProductData();
      })();
      const handleProductFetch = () => {
         fetchProductData();
      };
      window.addEventListener('productFetched', handleProductFetch);

      return () => {
         window.removeEventListener('productFetched', handleProductFetch);
      };
   }, [admin_furniture, group_products, product_view]);
   const { rooms } = useRooms();

   const groupData = rooms?.find((data: any) => data?._id === admin_furniture);

   const categoryData = groupData?.menu?.categories?.find(
      (cat: any) => cat._id === group_products
   );

   const filteredProducts = categoryData?.products?.filter(
      (type: any) => type._id !== product_view
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

   const [sliderRef, instanceRef] = useKeenSlider({
      initial: 0,
   });
   const [thumbnailRef, thumbnailInstanceRef] = useKeenSlider(
      {
         initial: 0,
         slides: {
            spacing: 10,
            perView: 6,
         },

         vertical: true,
         breakpoints: {
            '(max-width: 639px)': {
               vertical: false,
            },
         },
      },

      [ThumbnailPlugin(instanceRef)]
   );
   function resetActiveSlideIndex() {
      if (instanceRef.current) {
         instanceRef.current.update();

         instanceRef.current.moveToIdx(0, true);
      }
   }
   const intervalRef = useRef<NodeJS.Timeout | null>(null);
   const recalculateSliders = () => {
      if (instanceRef.current) {
         instanceRef.current.update();
      }
      if (thumbnailInstanceRef.current) {
         thumbnailInstanceRef.current.update();
      }
   };
   useEffect(() => {
      resetActiveSlideIndex();
      recalculateSliders();
   }, [productData]);

   useEffect(() => {
      const recalculateSliders = () => {
         if (instanceRef.current) {
            instanceRef.current.update();
         }
         if (thumbnailInstanceRef.current) {
            thumbnailInstanceRef.current.update();
         }
      };

      intervalRef.current = setInterval(() => {
         recalculateSliders();
      }, 1000);

      return () => {
         if (intervalRef.current) clearInterval(intervalRef.current);
      };
   }, [productData]);
   const productPreviewProps = {
      sliderRef,
      productData,
      selectedOption,
      thumbnailRef,
   };
   const productMenuProps = {
      productData,
      selectedOption,
      handleMouseEnter,
      handleMouseLeave,
      handleOptionClick,
      activeOption,
      isVisible,
      hideTimeout,
      setSelectedOption,
      resetActiveSlideIndex,
   };

   return (
      <main className="flex w-full flex-col   bg-white  pb-20 md:pb-5 ">
         <PageWrapper fetching={fetching} errorFetching={errorFetching}>
            <motion.section
               className="flex  w-full gap-6 items-start h-full md:flex-col lg:gap-4 pt-8 xl:gap-3"
               animate={{
                  opacity: [0, 100],
                  transition: { ease: ['easeIn', 'easeOut'] },
               }}
            >
               <ProductPreview {...productPreviewProps} />
               <ProductMenu {...productMenuProps} />
            </motion.section>
         </PageWrapper>
         {filteredProducts?.length > 0 && (
            <div className="w-full  flex flex-col gap-6 px-4 lg:px-3 md:py-10 py-16 ">
               <h1 className="text-[24px] text-darkGrey neue-thin tracking-widest uppercase md:text-lg">
                  Other products in the same group:
               </h1>
               <div className="max-w-[1500px]  grid grid-cols-3   gap-8 lg:grid-cols-2  md:gap-4  sm:flex sm:flex-col  ">
                  {filteredProducts?.map((data: any) => (
                     <ProductPriceCard
                        data={data}
                        key={data?._id}
                        admin={true}
                        {...data}
                        roomId={admin_furniture}
                        categoryId={group_products}
                     />
                  ))}
               </div>
            </div>
         )}
      </main>
   );
};

export default FurniturePage;
