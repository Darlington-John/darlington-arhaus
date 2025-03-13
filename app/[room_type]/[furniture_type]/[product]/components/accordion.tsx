import { useEffect, useState, useRef } from 'react';
interface AccordionItemProps {
   isOpen: boolean;
   onClick: () => void;

   [key: string]: any;
}
const AccordionItem: React.FC<AccordionItemProps> = ({
   isOpen,
   onClick,
   ...props
}) => {
   const contentHeight = useRef<HTMLDivElement | null>(null);
   const lists = props?.lists || [];
   const content = props?.content;
   const paragraph = props?.paragraph;
   const [height, setHeight] = useState('0px');
   useEffect(() => {
      if (isOpen && contentHeight.current) {
         setHeight(`${contentHeight.current.scrollHeight}px`);
      } else {
         setHeight('0px');
      }
   }, [isOpen]);
   return (
      <div className=" overflow-hidden   w-full flex flex-col     bg-white    px-2 lg:px-0  md:px-4">
         <button
            className={`w-full  py-4   flex items-center justify-between  border-none pointer leading-none   flex-nowrap outline-none   `}
            onClick={onClick}
         >
            <p className="text-xs text-grey  uppercase neue-light ">
               {props.header}
            </p>
            <span
               className={`p-[3px]   border-b-[1px] border-r-[1px]   border-black duration-300   ${
                  isOpen ? 'rotate-[225deg]' : 'rotate-[45deg]'
               }`}
            ></span>
         </button>
         <div
            ref={contentHeight}
            className="ease-out duration-300"
            style={{ height }}
         >
            <div className="flex flex-col  py-2 pb-3 ">
               {paragraph && (
                  <p className="   text-sm neue-light text-dimGrey   capitalize leading-relaxed lg:text-[13px] ">
                     {content}
                  </p>
               )}
               {!paragraph && (
                  <ul className=" list-disc  px-5 gap-4  flex flex-col lg:px-0 md:px-5">
                     {lists.map((data: any, index: number) => (
                        <li
                           className="   text-sm neue-light text-dimGrey   capitalize leading-relaxed lg:text-[13px] "
                           key={data?._id}
                        >
                           {data?.list}
                        </li>
                     ))}
                  </ul>
               )}
            </div>
         </div>
      </div>
   );
};
export const Accordion = (props: any) => {
   const { productData } = props;
   const [activeIndices, setActiveIndices] = useState<number[]>([]);

   const handleItemClick = (index: number) => {
      setActiveIndices((prevIndices) =>
         prevIndices.includes(index)
            ? prevIndices.filter((i) => i !== index)
            : [...prevIndices, index]
      );
   };

   return (
      <div className="w-full flex flex-col divide-y  divide-lightGrey border-b border-b-lightGrey   ">
         {productData?.features?.map((data: any, index: number) => (
            <AccordionItem
               key={data?._id}
               {...data}
               isOpen={activeIndices.includes(index)}
               onClick={() => handleItemClick(index)}
               lists={data.lists}
               content={data.content}
               paragraph={data.paragraph}
            />
         ))}
      </div>
   );
};
