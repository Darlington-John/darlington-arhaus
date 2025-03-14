'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ProductPriceCard from '~/app/components/cards/product-price-card';
import Filters from './[product]/components/filters/filters';
import boxEmpty from '~/public/icons/empty-box.svg';
import PageWrapper from './[product]/components/page-wrapper/page-wrapper';
import { motion } from 'framer-motion';
const FurniturePage = () => {
   const { room, category } = useParams();
   const [categoryData, setCategoryData] = useState<any>(null);
   const [fetching, setFetching] = useState(true);
   const [errorFetching, setErrorFetching] = useState(false);
   useEffect(() => {
      const fetchCategoryData = async () => {
         try {
            const res = await fetch(`/api/rooms/${room}/${category}`);

            if (!res.ok) {
               setErrorFetching(true);
               return;
            }
            const data = await res.json();
            setCategoryData(data.categoryData);
            setFetching(false);
         } catch (error) {
            setErrorFetching(true);
         } finally {
            setFetching(false);
         }
      };
      (async () => {
         await fetchCategoryData();
      })();
   }, [room, category]);

   const [selectedMaterial, setSelectedMaterial] = useState('All');

   const handleMaterialChange = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      setSelectedMaterial(event.target.value);
   };
   const [selectedOption, setSelectedOption] = useState('All');

   const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedOption(event.target.value);
   };
   const [selectedAvailability, setSelectedAvailability] = useState('All');

   const handleAvailabilityChange = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      setSelectedAvailability(event.target.value);
   };
   const [selectedPrice, setSelectedPrice] = useState('All');

   const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedPrice(event.target.value);
   };
   const [selectedWidth, setSelectedWidth] = useState('All');

   const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedWidth(event.target.value);
   };
   const [selectedSort, setSelectedSort] = useState('Featured');

   const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedSort(event.target.value);
   };
   const allUniqueOptions = Array.from(
      categoryData?.products
         ? categoryData.products
              .reduce(
                 (
                    map: Map<string, { option: string; option_image: string }>,
                    product: any
                 ) => {
                    const matchesMaterial =
                       selectedMaterial === 'All' ||
                       (selectedMaterial === 'Leather' && product?.leather) ||
                       (selectedMaterial === 'Upholstered' &&
                          product?.fabric) ||
                       (selectedMaterial === 'Finish' && product?.finish);

                    if (matchesMaterial && product.options) {
                       product.options.forEach((opt: any) => {
                          if (!map.has(opt.option)) {
                             map.set(opt.option, {
                                option: opt.option,
                                option_image: opt.option_image,
                             });
                          }
                       });
                    }
                    return map;
                 },
                 new Map()
              )
              .values()
         : []
   );

   const filteredProducts = (() => {
      const filteredProducts = categoryData?.products.filter((product: any) => {
         const materialMatch =
            selectedMaterial === 'All' ||
            (selectedMaterial === 'Leather' && product?.leather) ||
            (selectedMaterial === 'Upholstered' && product?.fabric) ||
            (selectedMaterial === 'Finish' && product?.finish);

         const optionMatch =
            selectedOption === 'All' ||
            (product.options?.length > 0 &&
               product.options.some(
                  (opt: any) => opt.option === selectedOption
               ));
         const availabilityMatch =
            selectedAvailability === 'All' ||
            (selectedAvailability === 'In stock' && product.in_stock);

         const widthMatch =
            selectedWidth === 'All' ||
            (() => {
               const widthValue = product.dimensions?.width;
               if (typeof widthValue !== 'number') return false;

               if (selectedWidth === '0 - 20')
                  return widthValue >= 0 && widthValue <= 20;
               if (selectedWidth === '20 - 40')
                  return widthValue > 20 && widthValue <= 40;
               if (selectedWidth === '40 - 100')
                  return widthValue >= 40 && widthValue <= 100;
               if (selectedWidth === '100+') return widthValue > 100;

               return false;
            })();

         const priceMatch = (() => {
            if (selectedPrice === 'All') return true;

            const priceValue = product.price;

            if (selectedPrice === '10-50') {
               return priceValue >= 10 && priceValue <= 50;
            }

            if (selectedPrice === '50+') {
               return priceValue > 50;
            }

            return false;
         })();

         return (
            materialMatch &&
            optionMatch &&
            availabilityMatch &&
            widthMatch &&
            priceMatch
         );
      });

      return filteredProducts?.slice().sort((a: any, b: any) => {
         const priceA = a.price;
         const priceB = b.price;

         switch (selectedSort) {
            case 'Name: A-Z':
               return a.name.localeCompare(b.name);
            case 'Name: Z-A':
               return b.name.localeCompare(a.name);
            case 'Price: High-to-Low':
               return priceB - priceA;
            case 'Price: Low-to-High':
               return priceA - priceB;
            default:
               return 0;
         }
      });
   })();

   const areAllFiltersDefault = () => {
      const isMaterialDefault = selectedMaterial === 'All';
      const isOptionDefault = selectedOption === 'All';
      const isAvailabilityDefault = selectedAvailability === 'All';
      const isPriceDefault = selectedPrice === 'All';
      const isWidthDefault = selectedWidth === 'All';
      return !(
         !isMaterialDefault ||
         !isOptionDefault ||
         !isAvailabilityDefault ||
         !isPriceDefault ||
         !isWidthDefault
      );
   };
   const filterProps = {
      allUniqueOptions,
      setSelectedOption,
      selectedAvailability,
      selectedPrice,
      setSelectedPrice,
      selectedMaterial,
      setSelectedMaterial,
      setSelectedAvailability,
      selectedOption,
      handleAvailabilityChange,
      handlePriceChange,
      handleMaterialChange,
      handleOptionChange,
      selectedWidth,
      setSelectedWidth,
      handleWidthChange,
      areAllFiltersDefault,
      filteredProducts,
      selectedSort,
      setSelectedSort,
      handleSortChange,
   };

   return (
      <main className="flex w-full flex-col px-16 pt-[140px] bg-white justify-center  items-center  xl:pt-16 lg:px-6  dxs:px-4">
         <PageWrapper fetching={fetching} errorFetching={errorFetching}>
            <motion.section
               className="flex flex-col w-full gap-6 max-w-[1500px]  xs:gap-2"
               animate={{
                  opacity: [0, 100],
                  transition: { ease: ['easeIn', 'easeOut'] },
               }}
            >
               <h1 className="neue-thin text-[48px] text-darkGrey uppercase text-black  xl:text-4xl lg:text-3xl md:text-2xl spaced  ">
                  {categoryData?.content}
               </h1>
               <Filters {...filterProps} />
               {filteredProducts && filteredProducts.length > 0 && (
                  <div className="  grid grid-cols-3   gap-8  md:gap-4  sm:flex sm:flex-col xl:grid-cols-2 dxs:gap-10  ">
                     {[...filteredProducts]?.reverse()?.map((data: any) => (
                        <ProductPriceCard
                           data={data}
                           {...data}
                           key={data?._id}
                           filteredProducts={filteredProducts}
                        />
                     ))}
                  </div>
               )}
               {filteredProducts && filteredProducts.length === 0 && (
                  <div className="flex items-center  mx-auto flex-col pb-10 ">
                     <Image src={boxEmpty} className="w-20" alt="" />
                     <p className="neue-thin text-2xl text-darkGrey uppercase text-black  spaced  text-center  leading-none">
                        No products match your filters.
                        <br />
                        <span className="text-base normal-case  neue-thin  tracking-normal ">
                           Try adjusting your filters.
                        </span>
                     </p>
                  </div>
               )}
            </motion.section>
         </PageWrapper>
      </main>
   );
};

export default FurniturePage;
