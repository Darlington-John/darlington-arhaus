'use client';
import Image from 'next/image';
import Link from 'next/link';
import arrowLeft from '~/public/icons/arrow-left.svg';
import twitter from '~/public/icons/twitter.svg';
import instagrem from '~/public/icons/insta.svg';
import pinterest from '~/public/icons/pin.svg';
import youtube from '~/public/icons/youtube.svg';
import { Accordion } from './accordion';
import { usePathname } from 'next/navigation';
import { useRooms } from '~/app/context/rooms-context';

const Footer = () => {
   const { loading, rooms } = useRooms();
   const mediaLink = [
      {
         icon: twitter,
         href: '/',
         id: 1,
      },
      {
         icon: instagrem,
         href: '/',
         id: 2,
      },
      {
         icon: pinterest,
         href: '/',
         id: 3,
      },
      {
         icon: youtube,
         href: '/',
         id: 4,
      },
   ];
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
               href: loading ? '/' : rooms?.[0]?._id ?? '/',
            },
            {
               dir: 'bedroom',
               href: loading ? '/' : rooms?.[3]?._id ?? '/',
            },
            {
               dir: 'lighting',
               href: loading ? '/' : rooms?.[2]?._id ?? '/',
            },
            {
               dir: 'dining',
               href: loading ? '/' : rooms?.[1]?._id ?? '/',
            },
         ],
      },
   ];
   const linkname = usePathname();
   return (
      <footer
         className={`bg-white flex flex-col w-full  text-darkGrey border-t-lightGrey border-t mt-10    ${
            linkname.startsWith('/admin') && 'hidden'
         }`}
      >
         <div className="flex item px-28  2xl:px-10 lg:flex-col sm:px-5  ">
            <div className=" grid grid-cols-4   w-full   py-12 lg:hidden">
               {footerLink.map((data) => (
                  <div
                     className="flex items-start  gap-4  flex-col"
                     key={data.header}
                  >
                     <h1 className="text-xs neue-thin uppercase neue-light">
                        {data.header}
                     </h1>
                     <div className="flex gap-4 flex-col">
                        {data.link.map((li) => (
                           <Link
                              href={li.href}
                              className="    text-xs neue-light text-dimGrey  hover:text-darkGrey capitalize "
                              key={li.dir}
                           >
                              {li.dir}
                           </Link>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
            <Accordion />
            <div className=" px-6 py-12  border-l border-l-2 border-lightGrey shrink-0 flex flex-col xl:px-3 lg:border-none   sm:px-0 ">
               <div className=" flex flex-col gap-6">
                  <div className="flex  flex-col gap-3">
                     <h1 className="text-xs neue-light">NEWSLETTER</h1>
                     <p className="text-xs  neue-light">
                        Sign up for promotions, decorating tips and more from
                        our team.
                     </p>
                     <div className="relative w-full flex items-center justify-center z-[5]">
                        <input
                           className="h-[50px] py-1 px-3 bg-white  text-black  text-sm  border  focus:ring-[1px]    ring-black  outline-none w-full border-dimGrey  duration-150  focus:rounded-sm z-[5]"
                           required
                           type="text"
                           placeholder="your email"
                        />

                        <Image
                           src={arrowLeft}
                           alt=""
                           className="w-5 absolute  right-2 cursor-pointer "
                        />
                     </div>
                  </div>
                  <div className="flex  items-center gap-4">
                     {mediaLink.map((media) => (
                        <Link key={media.id} href={media.href}>
                           <Image src={media.icon} className="w-5" alt="" />
                        </Link>
                     ))}
                  </div>
               </div>
            </div>
         </div>
         <div className="flex  border-t  border-t-lightGrey  w-full py-10  px-20 items-center justify-between text-[10px] neue-light text-dimGrey  capitalize sm:px-5 flex-wrap  ">
            <div className="flex gap-3 items-center  ">
               <Link href={'/'} className="hover:text-darkGrey ">
                  Terms and condition
               </Link>
               <Link href={'/'} className="hover:text-darkGrey ">
                  Privacy Policy
               </Link>
               <Link href={'/'} className="hover:text-darkGrey ">
                  Accessibilty
               </Link>
               <Link href={'/'} className="hover:text-darkGrey ">
                  *Promotions
               </Link>
            </div>
            <Link href={'/'} className="hover:text-darkGrey ">
               © 2024 Arhaus
            </Link>
         </div>
      </footer>
   );
};

export default Footer;
