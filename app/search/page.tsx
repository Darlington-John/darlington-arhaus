'use client';
import Image from 'next/image';
import { Suspense, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import ProductPriceCard from '~/app/components/cards/product-price-card';
import boxEmpty from '~/public/icons/empty-box.svg';

import loadingGif from '~/public/icons/double-loading-black.svg';
import { motion } from 'framer-motion';
import Filters from '../[room_type]/[furniture_type]/[product]/components/filters/filters';
import { useRooms } from '../context/rooms-context';
import Fuse from 'fuse.js';
import { ProductResult } from '../components/menu-header/house-hold-materials';
const SearchPage = () => {
   const { rooms, loading } = useRooms();

   const searchParams = useSearchParams();
   const searchTerm = searchParams.get('search') || '';
   const [searchResults, setSearchResults] = useState<ProductResult>({
      productResults: [],
   });
   const [noResults, setNoResults] = useState(false);

   const getAllProducts = (rooms: any) => {
      return (
         rooms?.flatMap(
            (room: any) =>
               room.menu?.categories?.flatMap((category: any) =>
                  category.products?.map((product: any) => ({
                     product,
                     roomId: room._id,
                     categoryId: category._id,
                  }))
               ) || []
         ) || []
      );
   };
   useEffect(() => {
      if (!searchTerm.trim()) {
         setSearchResults({ productResults: [] });
         setNoResults(false);
         return;
      }

      const allProducts = getAllProducts(rooms);

      const fuse = new Fuse(allProducts, {
         keys: ['product.name', 'product.tags'],
         threshold: 0.3,
         includeScore: true,
      });

      const results: any = fuse.search(searchTerm).map((result) => result.item);

      setNoResults(results.length === 0);
      setSearchResults({ productResults: results });
   }, [searchTerm, rooms]);

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
      searchResults?.productResults
         ? searchResults.productResults
              .reduce(
                 (
                    map: Map<string, { option: string; option_image: string }>,
                    product
                 ) => {
                    if (product.product?.options) {
                       product.product.options.forEach((opt: any) => {
                          const matchesMaterial =
                             selectedMaterial === 'All' ||
                             (selectedMaterial === 'Leather' &&
                                product.product?.leather) ||
                             (selectedMaterial === 'Upholstered' &&
                                product.product?.fabric) ||
                             (selectedMaterial === 'Finish' &&
                                product.product?.finish);

                          if (matchesMaterial && !map.has(opt.option)) {
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
      const filteredProducts = searchResults?.productResults?.filter(
         (product) => {
            const materialMatch =
               selectedMaterial === 'All' ||
               (selectedMaterial === 'Leather' && product.product?.leather) ||
               (selectedMaterial === 'Upholstered' &&
                  product.product?.fabric) ||
               (selectedMaterial === 'Finish' && product.product?.finish);

            const optionMatch =
               selectedOption === 'All' ||
               (product.product.options?.length > 0 &&
                  product.product.options.some(
                     (opt: any) => opt.option === selectedOption
                  ));
            const availabilityMatch =
               selectedAvailability === 'All' ||
               (selectedAvailability === 'In stock' &&
                  product.product.in_stock);

            const widthMatch =
               selectedWidth === 'All' ||
               (() => {
                  const widthValue = product.product.dimensions?.width;
                  if (typeof widthValue !== 'number') return false;

                  if (selectedWidth === '0 - 20')
                     return widthValue >= 0 && widthValue <= 20;
                  if (selectedWidth === '20 - 40')
                     return widthValue > 20 && widthValue <= 40;
                  if (selectedWidth === '40 - 100')
                     return widthValue >= 80 && widthValue <= 100;
                  if (selectedWidth === '100+') return widthValue > 100;

                  return false;
               })();

            const priceMatch = (() => {
               if (selectedPrice === 'All') return true;

               const priceValue = product.product.price;

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
         }
      );

      return filteredProducts?.slice().sort((a, b) => {
         const priceA = a.product.price;
         const priceB = b.product.price;

         switch (selectedSort) {
            case 'Name: A-Z':
               return a.product.name.localeCompare(b.product.name);
            case 'Name: Z-A':
               return b.product.name.localeCompare(a.product.name);
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
      <Suspense>
         <main className="flex w-full flex-col px-16 pt-[140px] bg-white justify-center  items-center  xl:pt-16 lg:px-6 dxs:px-4">
            <motion.section
               className="flex flex-col w-full gap-6 max-w-[1500px]  xs:gap-2"
               animate={{
                  opacity: [0, 100],
                  transition: { ease: ['easeIn', 'easeOut'] },
               }}
            >
               <h1 className="neue-thin text-[48px] text-darkGrey uppercase text-black  xl:text-4xl lg:text-3xl md:text-2xl spaced  ">
                  showing results for '{searchTerm}'
               </h1>
               {loading ? (
                  <div className="bg-white h-[40vh] w-full flex items-center justify-center opacity-20">
                     <Image
                        src={loadingGif}
                        alt="Loading"
                        className="w-16  md:w-10"
                     />
                  </div>
               ) : (
                  <>
                     <Filters {...filterProps} />

                     {noResults ? (
                        'No results'
                     ) : (
                        <>
                           {filteredProducts && filteredProducts.length > 0 && (
                              <div className="  grid grid-cols-3   gap-8  md:gap-4  sm:flex sm:flex-col xl:grid-cols-2  ">
                                 {filteredProducts.map(
                                    ({
                                       product,
                                       roomId,
                                       categoryId,
                                       index,
                                    }: any) => (
                                       <div key={product._id}>
                                          <ProductPriceCard
                                             data={product}
                                             {...product}
                                             roomId={roomId}
                                             categoryId={categoryId}
                                          />
                                       </div>
                                    )
                                 )}
                              </div>
                           )}
                           {filteredProducts &&
                              filteredProducts.length === 0 && (
                                 <div className="flex items-center  mx-auto flex-col pb-10 ">
                                    <Image
                                       src={boxEmpty}
                                       className="w-20"
                                       alt=""
                                    />
                                    <p className="neue-thin text-2xl text-darkGrey uppercase text-black  spaced  text-center  leading-none">
                                       No products match your filters.
                                       <br />
                                       <span className="text-base normal-case  neue-thin  tracking-normal ">
                                          Try adjusting your filters.
                                       </span>
                                    </p>
                                 </div>
                              )}
                        </>
                     )}
                  </>
               )}
            </motion.section>
         </main>
      </Suspense>
   );
};

export default SearchPage;
