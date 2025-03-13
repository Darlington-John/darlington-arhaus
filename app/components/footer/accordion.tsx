import Link from 'next/link';
import { useEffect } from 'react';

import { useState } from 'react';

import { useRef } from 'react';
import { useRooms } from '~/app/context/rooms-context';

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
   const features = props.features || [];
   const [height, setHeight] = useState('0px');
   useEffect(() => {
      if (isOpen && contentHeight.current) {
         setHeight(`${contentHeight.current.scrollHeight}px`);
      } else {
         setHeight('0px');
      }
   }, [isOpen]);
   return (
      <div className=" overflow-hidden   w-full flex flex-col     bg-white  border-b  border-lightGrey   px-2 ">
         <button
            className={`w-full  py-6   flex items-center justify-between  border-none pointer leading-none   flex-nowrap  md:py-5 `}
            onClick={onClick}
         >
            <p className="text-xs neue-thin uppercase neue-light ">
               {props.header}
            </p>
            <span
               className={`p-1   border-b-[1px] border-r-[1px]   border-black duration-300   ${
                  isOpen ? 'rotate-[45deg]' : 'rotate-[315deg]'
               }`}
            ></span>
         </button>
         <div
            ref={contentHeight}
            className="ease-out duration-300"
            style={{ height }}
         >
            <div className="flex flex-col  py-2 ">
               {features.map((data: any, index: any) => (
                  <Link
                     href={data.href}
                     className="leading-none  py-3 rounded-md shrink-0 xs:py-2 ease-out duration-100"
                     key={data.dir}
                  >
                     <p className="   text-sm neue-light text-dimGrey  hover:text-darkGrey capitalize ">
                        {data.dir}
                     </p>
                  </Link>
               ))}
            </div>
         </div>
      </div>
   );
};
export const Accordion = () => {
   const [activeIndices, setActiveIndices] = useState<number[]>([]);

   const handleItemClick = (index: number) => {
      setActiveIndices((prevIndices) =>
         prevIndices.includes(index)
            ? prevIndices.filter((i) => i !== index)
            : [...prevIndices, index]
      );
   };
   const { loading, rooms } = useRooms();

   const footerLink = [
      {
         header: 'our company',
         link: [
            {
               dir: 'About Arhaus',
               href: '/',
            },
            {
               dir: 'Careers',
               href: '/',
            },
            {
               dir: 'Sustainability',
               href: '/',
            },
            {
               dir: 'Social Responsibility',
               href: '/',
            },
            {
               dir: 'Press Inquiries',
               href: '/',
            },
            {
               dir: 'Investor Relations',
               href: '/',
            },
            {
               dir: 'Contact Us',
               href: '/',
            },
         ],
      },
      {
         header: 'customer care',
         link: [
            {
               dir: 'order status',
               href: '/',
            },
            {
               dir: 'Careers',
               href: '/',
            },
            {
               dir: 'Worry-Free protection plan',
               href: '/',
            },
            {
               dir: 'limited warranty',
               href: '/',
            },
            {
               dir: 'returns & exchanges',
               href: '/',
            },
            {
               dir: 'delivery and shipping',
               href: '/',
            },
            {
               dir: 'Catalog unsubscribe',
               href: '/',
            },
            {
               dir: 'California privacy rights',
               href: '/',
            },
         ],
      },
      {
         header: 'resources',
         link: [
            {
               dir: 'FAQ',
               href: '/',
            },
            {
               dir: 'Catalogs & subcriptions',
               href: '/',
            },
            {
               dir: 'Archange credit card',
               href: '/',
            },
            {
               dir: 'arhaus business',
               href: '/',
            },
            {
               dir: 'arhaus trade program',
               href: '/',
            },
            {
               dir: 'arhaus contract sales',
               href: '/',
            },
            {
               dir: 'Design services',
               href: '/',
            },
         ],
      },
      {
         header: 'shop',
         link: [
            {
               dir: 'living',
               href: loading ? '/' : rooms[0]?._id,
            },
            {
               dir: 'bedroom',
               href: loading ? '/' : rooms[3]?._id,
            },
            {
               dir: 'lighting',
               href: loading ? '/' : rooms[2]?._id,
            },
            {
               dir: 'dining',
               href: loading ? '/' : rooms[1]?._id,
            },
         ],
      },
   ];
   return (
      <div className="w-full lg:flex lg:flex-col  hidden ">
         {footerLink.map((item, index) => (
            <AccordionItem
               key={item?.header}
               {...item}
               isOpen={activeIndices.includes(index)}
               onClick={() => handleItemClick(index)}
               features={item.link}
            />
         ))}
      </div>
   );
};
