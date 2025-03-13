import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProductPriceCard = (props: any) => {
   const { room_type, furniture_type } = useParams();
   const { categoryId, roomId, admin } = props;
   const [currentPreview, setCurrentPreview] = useState(
      props?.views?.first_view
   );
   const [secondPreview, setSecondPreview] = useState(
      props?.views?.second_view
   );
   useEffect(() => {
      if (props?.options?.length > 0) {
         setCurrentPreview(props?.views?.first_view);
         setSecondPreview(props?.views?.second_view);
      }
   }, [props?.options]);
   const [selectedOption, setSelectedOption] = useState(0);
   return (
      <Link
         href={
            admin
               ? `/admin/products/${roomId}/${categoryId}/${props._id}`
               : `/${room_type || roomId}/${furniture_type || categoryId}/${
                    props._id
                 }`
         }
         className="flex flex-col h-[430px] bg-white  sm:h-full  sm:w-full md:h-auto "
      >
         <div className="h-[350px]  w-full relative overflow-hidden   image-container sm:h-full sm:w-full md:h-auto ">
            <img
               src={currentPreview}
               className="w-full h-full  object-cover image image-front"
            />
            <img
               src={secondPreview}
               className="w-full h-full  object-cover image image-back"
            />
         </div>
         <div className="w-full  flex flex-col gap-1  pt-1">
            <div className="flex items-center justify-between w-full  gap-3 ">
               <h1 className="text-sm neue-light text-darkGrey line-clamp-1 capitalize leading-none">
                  {props?.name}
               </h1>
               <h1 className=" text-sm neue-light text-darkGrey flex items-center gap-2 xl:gap-1">
                  <span className="text-sm neue-light text-darkGrey leading-none">
                     From:
                  </span>
                  <span className="text-darkRed leading-none">
                     ₦
                     {props?.price != null
                        ? props?.price.toLocaleString('en-US')
                        : 'N/A'}
                  </span>
                  <span className="text-sm neue-light text-grey  line-through  xl:hidden ">
                     ₦
                     {props?.cancelled_price != null
                        ? props?.cancelled_price.toLocaleString('en-US')
                        : 'N/A'}
                  </span>
               </h1>
            </div>
            <h1 className="neue-light uppercase text-xs text-grey  xs:text-[10px] ">
               {props?.options[selectedOption]?.option}
            </h1>
            <div className="flex items-center gap-2 px-1">
               {props?.options?.map((opt: any, index: number) => {
                  const isFirstOption = index === 0;
                  const isActive = isFirstOption
                     ? currentPreview === props?.views?.first_view
                     : currentPreview === props?.options[index]?.previews?.[0];

                  return (
                     <img
                        src={opt?.option_image}
                        key={opt?.option_image}
                        className={`w-5 h-5  object-cover  ${
                           isActive &&
                           'ring-[2px] ring-softGreen  ring-offset-[1px]'
                        }`}
                        onClick={(e) => {
                           e.preventDefault();
                           e.stopPropagation();
                           setCurrentPreview(
                              props?.options[index]?.previews[0]
                           );
                           setSecondPreview(
                              props?.options[index]?.previews[1] ??
                                 props?.options[index]?.previews[0]
                           );
                           setSelectedOption(index);
                           if (isFirstOption) {
                              setCurrentPreview(props?.views?.first_view);
                              setSecondPreview(props?.views?.second_view);
                           } else {
                              setCurrentPreview(
                                 props?.options[index]?.previews?.[0]
                              );
                              setSecondPreview(
                                 props?.options[index]?.previews?.[1] ??
                                    props?.options[index]?.previews?.[0]
                              );
                           }
                        }}
                     />
                  );
               })}
            </div>
         </div>
      </Link>
   );
};

export default ProductPriceCard;
