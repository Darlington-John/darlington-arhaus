'use client';
import { useEffect, useRef } from 'react';

const ProductPreview = (props: any) => {
   const {
      sliderRef,
      productData,
      selectedOption,
      activeIndex,
      setActiveIndex,
   } = props;
   const startX = useRef<number | null>(null);
   const isDragging = useRef(false);

   const goToSlide = (index: number) => {
      const totalSlides = productData?.options[selectedOption]?.previews.length;
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      setActiveIndex(index);
   };

   const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
      isDragging.current = true;
      startX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
   };
   const nextSlide = () =>
      goToSlide(
         (activeIndex + 1) %
            productData?.options[selectedOption]?.previews.length
      );

   const prevSlide = () =>
      goToSlide(
         (activeIndex -
            1 +
            productData?.options[selectedOption]?.previews.length) %
            productData?.options[selectedOption]?.previews.length
      );

   const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
      if (!isDragging.current || startX.current === null) return;

      const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const diff = startX.current - currentX;

      if (Math.abs(diff) > 50) {
         if (diff > 0) nextSlide();
         else prevSlide();

         isDragging.current = false;
      }
   };

   const handleTouchEnd = () => {
      isDragging.current = false;
      startX.current = null;
   };

   useEffect(() => {
      const slider = sliderRef.current;
      if (!slider) return;
      const options = { passive: true };
      slider.addEventListener('mousedown', handleTouchStart);
      slider.addEventListener('mousemove', handleTouchMove);
      slider.addEventListener('mouseup', handleTouchEnd);
      slider.addEventListener('mouseleave', handleTouchEnd);

      slider.addEventListener('touchstart', handleTouchStart, options);
      slider.addEventListener('touchmove', handleTouchMove, options); // 👈 Fix warning
      slider.addEventListener('touchend', handleTouchEnd, options);

      return () => {
         slider.removeEventListener('mousedown', handleTouchStart);
         slider.removeEventListener('mousemove', handleTouchMove);
         slider.removeEventListener('mouseup', handleTouchEnd);
         slider.removeEventListener('mouseleave', handleTouchEnd);

         slider.removeEventListener('touchstart', handleTouchStart);
         slider.removeEventListener('touchmove', handleTouchMove);
         slider.removeEventListener('touchend', handleTouchEnd);
      };
   }, [activeIndex, productData, selectedOption]);
   return (
      <div className="flex items-start  w-[60%]   shrink-0   gap-5   sm:flex-col  lg:gap-2 md:w-full sticky top-10 md:static">
         <div
            ref={sliderRef}
            className=" !max-w-[90%] !min-w-[90%] sm:!max-w-full sm:!min-w-full  flex duration-300 overflow-hidden"
         >
            {productData?.options[selectedOption]?.previews.map((view: any) => (
               <img
                  src={view}
                  className=" !w-full  !h-full   !max-w-[100%] !min-w-[100%] duration-300"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                  alt="preview"
                  key={view}
               />
            ))}
         </div>
         <div className="flex !flex-col  !w-20 !h-full sm:!flex-row sm:mx-3 sm:!items-start  gap-2">
            {productData?.options[selectedOption]?.previews.map(
               (view: any, index: number) => (
                  <div
                     className={`!w-full  !h-auto  object-contain    !max-w-full !min-w-full   !min-h-0  !max-h-16    cursor-pointer   overflow-hidden  duration-150 dxs:!max-h-12   dxs:!min-w-16  !flex sm:!items-start   ${
                        activeIndex === index &&
                        'ring-lightGreen  ring-offset-[1px] ring'
                     }`}
                     key={view}
                     onClick={() => goToSlide(index)}
                  >
                     <img
                        src={view}
                        className="w-full   object-contain   dxs:!h-full dxs:w-auto     "
                        alt="preview"
                     />
                  </div>
               )
            )}
         </div>
      </div>
   );
};

export default ProductPreview;
