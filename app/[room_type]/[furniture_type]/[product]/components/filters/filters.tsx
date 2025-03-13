'use client';

import { usePopup } from '~/lib/utils/toggle-popups';
import MaterialsFilter from './materials';
import OptionsFilter from './options';
import AvailabilityFilter from './availability';
import WidthFilter from './width';
import Image from 'next/image';
import xmark from '~/public/icons/x-black.svg';
import Price from './price';
import SortBy from './sort';
const Filters = (props: any) => {
   const {
      isVisible: isFilterPopVisible,
      isActive: filterPop,
      ref: filterPopRef,
      togglePopup: toggleFilterPop,
   } = usePopup();
   const {
      isVisible: isOptionFilterVisible,
      isActive: optionFilter,
      ref: optionFilterRef,
      togglePopup: toggleOptionFilter,
   } = usePopup();
   const {
      isVisible: isAvailabilityFilterVisible,
      isActive: availabilityFilter,
      ref: availabilityFilterRef,
      togglePopup: toggleAvailabilityFilter,
   } = usePopup();
   const {
      isVisible: isPriceFilterVisible,
      isActive: priceFilter,
      ref: priceFilterRef,
      togglePopup: togglePriceFilter,
   } = usePopup();
   const {
      isVisible: isWidthFilterVisible,
      isActive: widthFilter,
      ref: widthFilterRef,
      togglePopup: toggleWidthFilter,
   } = usePopup();
   const {
      isVisible: isSortPopVisible,
      isActive: sortPop,
      ref: sortPopRef,
      togglePopup: toggleSortPop,
   } = usePopup();

   const {
      allUniqueOptions,
      setSelectedOption,
      selectedAvailability,
      selectedMaterial,
      setSelectedMaterial,
      selectedOption,
      handleAvailabilityChange,
      handleMaterialChange,
      handleOptionChange,
      setSelectedAvailability,
      selectedPrice,
      setSelectedPrice,
      handlePriceChange,
      selectedWidth,
      setSelectedWidth,
      handleWidthChange,
      areAllFiltersDefault,
      filteredProducts,
      setSelectedSort,
      selectedSort,
      handleSortChange,
   } = props;

   const materialsFilterProps = {
      toggleFilterPop,
      isFilterPopVisible,
      filterPop,
      filterPopRef,
      selectedMaterial,
      handleMaterialChange,
   };
   const optionFilterProps = {
      allUniqueOptions,
      toggleOptionFilter,
      isOptionFilterVisible,
      optionFilterRef,
      optionFilter,
      selectedOption,
      setSelectedOption,
      handleOptionChange,
   };
   const availabilityFilterProps = {
      toggleAvailabilityFilter,
      isAvailabilityFilterVisible,
      availabilityFilterRef,
      availabilityFilter,
      selectedAvailability,
      setSelectedAvailability,
      handleAvailabilityChange,
   };
   const priceFilterProps = {
      togglePriceFilter,
      isPriceFilterVisible,
      priceFilterRef,
      priceFilter,
      selectedPrice,
      setSelectedPrice,
      handlePriceChange,
   };
   const widthFilterProps = {
      toggleWidthFilter,
      isWidthFilterVisible,
      widthFilterRef,
      widthFilter,
      selectedWidth,
      setSelectedWidth,
      handleWidthChange,
   };
   const sortProps = {
      toggleSortPop,
      isSortPopVisible,
      sortPop,
      sortPopRef,
      selectedSort,
      handleSortChange,
   };
   const filterStates = [
      {
         id: 1,
         hidden_state: 'All',
         type: 'Material',
         state: selectedMaterial,
         set_state: setSelectedMaterial,
      },
      {
         id: 2,
         hidden_state: 'All',
         type: 'Option',
         state: selectedOption,
         set_state: setSelectedOption,
      },
      {
         id: 3,
         hidden_state: 'All',
         state: selectedAvailability,
         type: 'Availability',
         set_state: setSelectedAvailability,
      },
      {
         id: 4,
         hidden_state: 'All',
         state: selectedWidth,
         type: 'Width',
         set_state: setSelectedWidth,
         measure: ' inches',
      },
      {
         id: 5,
         hidden_state: 'All',
         state: selectedPrice,
         type: 'Price',
         set_state: setSelectedPrice,
         measure: '(₦)',
      },
   ];
   const handleClearFilters = () => {
      setSelectedMaterial('All');
      setSelectedAvailability('All');
      setSelectedOption('All');
      setSelectedPrice('All');
      setSelectedWidth('All');
   };
   return (
      <div className="flex w-full flex-col gap-0">
         <div className="py-8 border-t border-t-lightGrey flex items-center justify-between w-full  lg:py-5  xs:flex-col  xs:gap-3">
            <div className="flex items-center gap-3 w-full">
               <MaterialsFilter {...materialsFilterProps} />
               <OptionsFilter {...optionFilterProps} />
               <AvailabilityFilter {...availabilityFilterProps} />
               <Price {...priceFilterProps} />
               <WidthFilter {...widthFilterProps} />
            </div>
            <div className="flex items-center gap-2  shrink-0 xs:self-start">
               <span className="text-xs neue-thin text-grey ">
                  {filteredProducts?.length} pieces
               </span>
               <div className="flex items-center gap-2 ">
                  <span className="text-xs neue-light text-black">Sort by</span>
                  <SortBy {...sortProps} />
               </div>
            </div>
         </div>
         {!areAllFiltersDefault() && (
            <div className="w-full flex items-center  gap-2">
               {filterStates.map(
                  (data) =>
                     data.state !== data.hidden_state && (
                        <div
                           className="py-2 px-3 flex items-center gap-2 border border-lightGrey rounded-full"
                           key={data?.id}
                        >
                           <span className="text-xs neue-light text-grey">
                              {data.type}:{'  '}
                              <span className="uppercase neue-light">
                                 {data.state}
                                 {data?.measure}
                              </span>
                           </span>
                           <Image
                              src={xmark}
                              alt=""
                              className="w-2.5 cursor-pointer"
                              onClick={() => data.set_state('All')}
                           />
                        </div>
                     )
               )}
               <button
                  className="text-sm underline neue-light text-grey"
                  onClick={handleClearFilters}
               >
                  Clear all
               </button>
            </div>
         )}
      </div>
   );
};

export default Filters;
