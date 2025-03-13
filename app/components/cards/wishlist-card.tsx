import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useUser } from '~/app/context/auth-context';
import { apiRequest } from '~/lib/utils/api-request';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Image from 'next/image';
import check from '~/public/icons/check.svg';
import loader from '~/public/icons/loading-white.svg';
const WishlistCard = (props: any) => {
   const { user } = useUser();
   const [removing, setRemoving] = useState(false);
   const [sucessful, setSucessful] = useState(false);
   const router = useRouter();
   const pathname = usePathname();
   const furnitureId = props?.furnitureId;
   const groupId = props?.groupId;
   const productId = props?.productId;
   const handleRemoveFromWishlist = async () => {
      if (removing) return;

      if (!user) {
         router.push(`/auth/log-in/?redirect=${encodeURIComponent(pathname)}`);
         return;
      }

      const check = !productId;

      if (check) {
         toast.error('ProductId not found');
         return;
      }
      setRemoving(true);
      await apiRequest({
         url: '/api/wishlist/remove-from-wishlist',
         method: 'DELETE',
         body: {
            furnitureId,
            groupId,
            productId,
            userId: user?._id,
         },
         onSuccess: () => {
            setSucessful(true);
            setTimeout(() => {
               window.dispatchEvent(new CustomEvent('productFetched'));
               window.dispatchEvent(new CustomEvent('userUpdated'));
               window.dispatchEvent(new CustomEvent('usersUpdated'));
               window.dispatchEvent(new CustomEvent('wishlistFetched'));
            }, 2000);

            toast.success(`Product removed from wishlist`, {
               icon: <FaCheck color="white" />,
            });
         },
         onError: (error) => {
            toast.error(error || "Couldn't remove product from wishlist");
         },
         onFinally: () => {
            setRemoving(false);
         },
      });
   };
   return (
      <Link
         href={`/${furnitureId}/${groupId}/${productId}`}
         className="flex flex-col h-[430px] bg-white  sm:h-full  sm:w-full md:h-auto "
      >
         <div className="h-[350px]  w-full relative overflow-hidden   image-container sm:h-full sm:w-full md:h-auto ">
            <img
               src={props?.views?.first_view}
               className="w-full h-full  object-cover image image-front"
            />
            <img
               src={props?.views?.second_view}
               className="w-full h-full  object-cover image image-back"
            />
         </div>
         <div className="w-full  flex flex-col gap-1.5  py-4">
            <div className="flex items-center justify-between w-full  gap-3 ">
               <h1 className="text-sm neue-light text-darkGrey line-clamp-1 capitalize">
                  {props?.name}
               </h1>
               <h1 className=" text-sm neue-light text-darkGrey flex items-center gap-2 xl:gap-1">
                  <span className="text-sm neue-light text-darkGrey">
                     From:
                  </span>
                  <span className="text-darkRed">
                     $
                     {props?.price != null
                        ? props?.price.toLocaleString('en-US')
                        : 'N/A'}
                  </span>
                  <span className="text-sm neue-light text-grey  line-through  xl:hidden ">
                     $
                     {props?.cancelled_price != null
                        ? props?.cancelled_price.toLocaleString('en-US')
                        : 'N/A'}
                  </span>
               </h1>
            </div>
            <button
               className="bg-green   py-2 px-3 text-xs  text-white  hover:ring-[1px]  ring-offset-2 hover:ring-green   duration-150  self-start min-w-[140px]"
               onClick={(e) => {
                  handleRemoveFromWishlist();
                  e.preventDefault();
                  e.stopPropagation();
               }}
            >
               {sucessful ? (
                  <Image src={check} alt="" className="w-5 mx-auto" />
               ) : removing ? (
                  <Image src={loader} alt="" className="w-5 mx-auto" />
               ) : (
                  'Remove from wishlist'
               )}
            </button>
         </div>
      </Link>
   );
};

export default WishlistCard;
