import Image from 'next/image';
import { useUser } from '~/app/context/auth-context';
import right from '~/public/icons/caret-left.svg';
import logoutIcon from '~/public/icons/logout.svg';
import { formatDate } from '~/lib/utils/format-date';
import { usePopup } from '~/lib/utils/toggle-popups';
import LogoutPrompt from './logout-prompt';
import Link from 'next/link';

const Profile = (props: any) => {
   const { user } = useUser();
   const {
      profile,
      isProfileVisible,
      profileRef,
      toggleChangeNamePopup,
      toggleChangeProfilePopup,
      toggleLogoutPromptPopup,
   } = props;

   return (
      profile && (
         <div
            className={`w-[320px]  border      py-4 px-6  flex flex-col gap-4       duration-300 absolute top-10 right-0    2xs:left-1/2  2xs:transform   2xs:-translate-x-1/2 bg-white  border-lightGrey shadow-2xl  2xs:fixed   xs:gap-2     ${
               isProfileVisible ? 'opacity-100' : 'opacity-0'
            }`}
            ref={profileRef}
         >
            <h1 className="text-[27px]  louize   text-start xs:text-2xl">
               Your account
            </h1>
            <div className="flex flex-col w-full gap-1">
               <div className="flex  items-center gap-3 py-2 px-3   border border-lightGrey  bg-lightestGrey    ">
                  <img
                     src={
                        user?.profile ? user.profile : '/icons/user-circle.svg'
                     }
                     className="w-10  h-10 object-cover rounded-full cursor-pointer "
                     onClick={toggleChangeProfilePopup}
                     alt=""
                  />
                  <div className="flex flex-col items-start line-clamp-1 ">
                     <h1 className="text-sm   leading-[24px] line-clamp-1   uppercase">
                        {user?.firstName} {user?.lastName}
                     </h1>
                     <h1 className="text-xs leading-[20px] ">{user?.email}</h1>
                  </div>
               </div>
               <div className="w-full items-center flex justify-between ">
                  <h1 className="text-sm text-[#8D8896] py-1 px-3 ">
                     Joined{' '}
                     <span className=" text-black ">
                        {formatDate(user?.createdAt)}
                     </span>
                  </h1>
                  {user?.isAdmin && (
                     <Link
                        href="/admin"
                        className="text-xs  bg-[#FFFBDB] neue-light px-2 border border-[#a37a00]   rounded-full text-[#a37a00]"
                     >
                        admin
                     </Link>
                  )}
               </div>
               <div className="w-full flex flex-col gap-2 ">
                  <button
                     className="flex items-center bg-lightestGrey border border-lightGrey   justify-between p-3  outline-none    duration-150  hover:bg-lightGrey"
                     onClick={toggleChangeNamePopup}
                  >
                     <h1 className="text-xs uppercase neue-light ">
                        Change name
                     </h1>
                     <Image src={right} alt="" className="h-4 w-4" />
                  </button>
                  <button
                     className="flex items-center bg-lightestGrey border border-lightGrey    justify-between p-3  outline-none  duration-150 hover:bg-lightGrey   "
                     onClick={toggleChangeProfilePopup}
                  >
                     <h1 className="text-xs  uppercase neue-light">
                        Change image
                     </h1>
                     <Image src={right} alt="" className="h-4  w-4 " />
                  </button>
               </div>
            </div>
            <button
               className="bg-black  w-full  flex items-center justify-center  h-[40px] gap-2 duration-300 hover:ring-[2px]  ring-black ring-offset-1"
               onClick={toggleLogoutPromptPopup}
            >
               <Image src={logoutIcon} className="w-5 h-5 " alt="" />
               <span className=" text-xs  uppercase  neue-light text-white">
                  Log Out
               </span>
            </button>
         </div>
      )
   );
};

export default Profile;
