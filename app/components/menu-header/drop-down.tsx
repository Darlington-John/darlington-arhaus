'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useRooms } from '~/app/context/rooms-context';
import { context } from '~/app/context/context';
import ProductPriceCard from '../cards/product-price-card';
import ProductSearchCard from '../cards/search-card';

const Dropdown = (props: any) => {
   const {
      activeDropdown,
      isVisible,
      hideTimeout,
      handleMouseLeave,
      setIsVisible,
      displayedProducts,
      searchTerm,
      setSearchTerm,
      noResults,
   } = props;
   const { rooms } = useRooms();
   const main = (rooms || [])[activeDropdown]?.menu;
   const linkname = usePathname();
   const searchParams = useSearchParams();
   const searchQuery = searchParams.get('search') || '';
   useEffect(() => {
      setIsVisible(false);
      setSearchTerm('');
   }, [linkname, searchQuery]);
   const router = useRouter();

   const handleNavigation = (url: string) => {
      router.push(url);
   };
   const { currentDir } = context();

   const [num, setNum] = useState(4);

   useEffect(() => {
      const updateNum = () => {
         if (window.innerWidth > 1279) {
            setNum(4);
         } else if (window.innerWidth < 1279 && window.innerWidth >= 575) {
            setNum(2);
         } else {
            setNum(2);
         }
      };

      updateNum(); // Set initial value
      window.addEventListener('resize', updateNum);
      return () => window.removeEventListener('resize', updateNum);
   }, []);
   return (
      <>
         {activeDropdown !== null && (
            <div
               className={`absolute top-[130px] left-0 w-full   p-4 z-10 transition-all duration-300 flex-row flex bg-white xl:hidden shadow  justify-center    ${
                  isVisible ? ' pop' : 'pop-hidden'
               }
        
               `}
               onMouseEnter={() => {
                  if (hideTimeout.current) {
                     clearTimeout(hideTimeout.current);
                     hideTimeout.current = null;
                  }
               }}
               onMouseLeave={handleMouseLeave}
            >
               <div className="flex gap-6 w-[30%]  shrink-0 flex-col  xl:gap-3 ">
                  <h1 className="text-xs  text-black  uppercase tracking-widest">
                     {rooms[activeDropdown].content}
                  </h1>
                  <div className="w-full flex justify-between flex-col gap-5 xl:gap-3 items-start ">
                     {main?.categories.map((link: any, i: number) => (
                        <Link
                           href={`/${currentDir}/${link._id}`}
                           className={`text-sm  neue     text-[#808080]  tracking-widest  hover:text-green capitalize   ${
                              linkname.startsWith(
                                 `/${currentDir}/${link._id}`
                              ) && ' text-green '
                           }`}
                           key={i}
                        >
                           {link?.content}
                        </Link>
                     ))}
                  </div>
               </div>
               {main?.categories
                  ?.slice(0, 2)
                  .map((category: any, index: number) => {
                     const group = category;

                     if (!group) return null; // Skip if there's no valid group type

                     return (
                        <div
                           key={category._id}
                           onClick={() =>
                              handleNavigation(
                                 `/${currentDir}/${category?._id}`
                              )
                           }
                           className="flex gap-3 flex-1 shrink-0 flex-col w-[30%] px-6 grow-container max-w-[30%] cursor-pointer"
                        >
                           {group?.image && (
                              <img
                                 src={group.image}
                                 alt={group?.type ?? 'Category Image'}
                                 className="w-full max-h-[370px] min-h-[300px] object-cover"
                              />
                           )}
                           <Link
                              href={
                                 category?._id && group?._id
                                    ? `/${currentDir}/${category._id}/${group._id}`
                                    : '/'
                              }
                              className="uppercase neue-bold text-green text-xs relative pb-2 tracking-widest"
                           >
                              shop {group?.content ?? ''}
                              <div className="grow absolute bottom-0 left-0 w-0 h-[2px] bg-green"></div>
                           </Link>
                        </div>
                     );
                  })}
            </div>
         )}
         {searchTerm.trim() && (
            <div
               className={`absolute top-[65px] left-0 w-full   p-6 z-10 transition-all duration-300 flex-col flex bg-white  shadow-2xl  justify-between gap-4 xl:top-[98px] dxs:p-3 dxs:top-[93px]    
         ${searchTerm && ' pop'}
            `}
            >
               {searchTerm && !noResults && displayedProducts.length > 0 && (
                  <div className="flex w-full items-center justify-between">
                     <h1 className="neue-light uppercase text-xs spaced dxs:text-[10px]">
                        Products found {` `}({displayedProducts.length})
                     </h1>
                     {displayedProducts.length > num && (
                        <Link
                           href={`/search/?search=${searchTerm}`}
                           className="font-bold  uppercase text-xs spaced underline dxs:text-[10px]"
                        >
                           See All Results
                        </Link>
                     )}
                  </div>
               )}
               {searchTerm && noResults && (
                  <p className="text-sm text-grey ">
                     No products found for "{searchTerm}"
                  </p>
               )}
               {displayedProducts.length > 0 ? (
                  <div className="grid grid-cols-4   gap-4  md:gap-4   xl:grid-cols-3 xs:grid-cols-2   w-full ">
                     {displayedProducts
                        .slice(0, num)
                        .map(({ product, roomId, categoryId }: any) => (
                           <div key={product._id}>
                              <ProductSearchCard
                                 data={product}
                                 {...product}
                                 roomId={roomId}
                                 categoryId={categoryId}
                                 setSearchTerm={setSearchTerm}
                              />
                           </div>
                        ))}
                  </div>
               ) : (
                  !searchTerm && <p>Start searching to find products...</p>
               )}
            </div>
         )}
      </>
   );
};

export default Dropdown;
