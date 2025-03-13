'use client';
import Image from 'next/image';
import logo from '~/public/images/arhaus.svg';
import Search from './search';
import Link from 'next/link';
import MenuHeader from '../menu-header/menu-header';
import location from '~/public/icons/location.svg';
import userIcon from '~/public/icons/user.svg';
import bag from '~/public/icons/bag.svg';
import heart from '~/public/icons/heart.svg';
import { useCallback, useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import SearchBar from './search-bar';
import { usePathname } from 'next/navigation';
import { useUser } from '~/app/context/auth-context';
import { usePopup } from '~/lib/utils/toggle-popups';
import Profile from './profile-dropdown';
import ChangeName from './change-name';
import ChangeProfile from './change-profile';
import LogoutPrompt from './logout-prompt';
import { useRooms } from '~/app/context/rooms-context';
const Header = () => {
   const { user, loading } = useUser();
   const [isVisible, setIsVisible] = useState(true);
   const [lastScrollY, setLastScrollY] = useState(0);
   const [isScrolled, setIsScrolled] = useState(false);
   const {
      isVisible: isProfileVisible,
      isActive: profile,
      ref: profileRef,
      togglePopup: toggleProfilePopup,
   } = usePopup();
   const handleScrollBeyond = () => {
      const scrollTop = window.scrollY;
      const scrollThreshold = 500;

      if (scrollTop > scrollThreshold) {
         setIsScrolled(true);
      } else {
         setIsScrolled(false);
      }
   };

   useEffect(() => {
      window.addEventListener('scroll', handleScrollBeyond);

      return () => {
         window.removeEventListener('scroll', handleScrollBeyond);
      };
   }, []);
   const handleScroll = useCallback(() => {
      setLastScrollY((prevLastScrollY) => {
         const currentScrollY = window.scrollY;

         if (currentScrollY > prevLastScrollY) {
            setIsVisible(false);
         } else {
            setIsVisible(true);
         }

         return currentScrollY;
      });
   }, []);

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [lastScrollY, handleScroll]);

   const elementStyle = {
      transition: 'all 0.5s',
      transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
   };

   // const seedDatabase = async () => {
   //    try {
   //       const response = await fetch('/api/seed-database', {
   //          method: 'POST',
   //       });
   //       const data = await response.json();
   //       alert(data.message);
   //    } catch (error) {
   //       //@ts-ignore
   //       alert('Failed to seed database: ' + error.message);
   //    }
   // };
   const linkname = usePathname();

   const links = [
      {
         to: '/wishlist',
         icon: heart,
         count: user?.wishlist?.length,
      },
      {
         to: '/bag',
         icon: bag,
         count: user?.bag?.length,
      },
   ];
   const {
      isVisible: isChangeNameVisible,
      isActive: changeName,
      ref: changeNameRef,
      togglePopup: toggleChangeNamePopup,
   } = usePopup();

   const {
      isVisible: isChangeProfileVisible,
      isActive: changeProfile,
      ref: changeProfileRef,
      togglePopup: toggleChangeProfilePopup,
   } = usePopup();
   const {
      isVisible: isLogoutPromptVisible,
      isActive: logoutPrompt,
      ref: logoutPromptRef,
      togglePopup: toggleLogoutPromptPopup,
   } = usePopup();
   const {
      isVisible: searchDropVisible,
      isActive: searchDrop,
      ref: searchDropRef,
      togglePopup: toggleSearchDrop,
   } = usePopup();
   const logoutPromptProps = {
      isLogoutPromptVisible,
      logoutPrompt,
      logoutPromptRef,
      toggleLogoutPromptPopup,
   };
   const profileDropdownProps = {
      profile,
      isProfileVisible,
      profileRef,
      toggleChangeNamePopup,
      toggleChangeProfilePopup,
      toggleLogoutPromptPopup,
   };
   const changeNameProps = {
      changeName,
      changeNameRef,
      isChangeNameVisible,
      toggleChangeNamePopup,
   };

   const changeProfileProps = {
      isChangeProfileVisible,
      changeProfile,
      changeProfileRef,
      toggleChangeProfilePopup,
   };

   const { rooms } = useRooms();
   interface SearchResults {
      productResults: Array<{
         product: any;
         roomId: string;
         categoryId: string;
      }>;
   }

   const [searchTerm, setSearchTerm] = useState('');
   const [searchResults, setSearchResults] = useState<SearchResults>({
      productResults: [],
   });
   const [noResults, setNoResults] = useState(false);

   // Function to extract all products along with roomId and categoryId
   const getAllProducts = (rooms: any) => {
      return (
         rooms?.flatMap(
            (room: any) =>
               room.menu?.categories?.flatMap((category: any) =>
                  category.products.map((product: any) => ({
                     product,
                     roomId: room._id,
                     categoryId: category._id,
                  }))
               ) || []
         ) || []
      );
   };

   const handleSearch = (query: string, rooms: any) => {
      if (!query.trim()) {
         setSearchResults({ productResults: [] });
         setNoResults(false);
         return;
      }

      const allProducts = getAllProducts(rooms);
      // Fuse.js settings
      const fuse = new Fuse(allProducts, {
         keys: ['product.name', 'product.price', 'product.tags'], // Fields to search
         threshold: 0.3,
         includeScore: true,
      });

      const results: any = fuse.search(query).map((result) => result.item); // Extract matched items

      if (results.length === 0) {
         setNoResults(true);
      } else {
         setNoResults(false);
      }

      setSearchResults({ productResults: results });
   };

   const handleSearchChange = (
      event: React.ChangeEvent<HTMLInputElement>,
      rooms: any
   ): void => {
      const query = event.target.value;
      setSearchTerm(query);
      handleSearch(query, rooms);
   };

   // Determine what to display
   const displayedProducts = searchTerm ? searchResults.productResults : [];

   const menuProps = {
      displayedProducts,
      searchTerm,
      setSearchTerm,
      searchDropVisible,
      searchDrop,
      searchDropRef,
      toggleSearchDrop,
      noResults,
      handleSearchChange,
   };
   return (
      <>
         <header
            className={`flex flex-col w-full bg-white   fixed top-0  left-0 z-[100]  ${
               linkname.startsWith('/admin') && 'hidden'
            }`}
            style={elementStyle}
         >
            <div className="flex items-center justify-between      h-[65px] px-10 border-bottom border-lightGrey border-b   relative  z-[50] bg-white xl:h-[45px] xl:px-4  ">
               {/* <button onClick={seedDatabase}>Seed Database</button> */}
               <Search
                  handleSearchChange={handleSearchChange}
                  noResults={noResults}
                  searchTerm={searchTerm}
                  searchDropVisible={searchDropVisible}
                  ref={searchDropRef}
                  toggleSearchDrop={toggleSearchDrop}
               />

               <Link
                  href={'/'}
                  className="absolute  -translate-x-1/2  left-[50%]  right-[50%] w-32 xl:static  xl:translate-x-0  "
               >
                  <Image src={logo} alt="logo" className="w-32  dxs:w-28 " />
               </Link>
               <div
                  className="flex gap-6   
            items-center dxs:gap-3 "
               >
                  {links.map((data) => (
                     <Link key={data?.to} href={data.to} className="relative">
                        {data.count > 0 && data?.count && (
                           <span className="flex items-center justify-center h-2 w-2 rounded-full   absolute  -right-2  text-[11px]">
                              {data?.count}
                           </span>
                        )}
                        <Image src={data.icon} alt={data.to} className="w-4" />
                     </Link>
                  ))}
                  <div className="relative flex items-center justify-center ">
                     {user ? (
                        <button onClick={toggleProfilePopup}>
                           <img
                              src={
                                 user?.profile
                                    ? user.profile
                                    : '/icons/user.svg'
                              }
                              className={
                                 user?.profile ? 'w-6 h-6 rounded-full' : 'w-4'
                              }
                           />
                        </button>
                     ) : (
                        <Link href={'/auth/log-in'}>
                           <Image src={userIcon} className="w-4" alt="" />
                        </Link>
                     )}

                     <Profile {...profileDropdownProps} />
                  </div>
               </div>
            </div>
            <SearchBar {...menuProps} />
            <MenuHeader {...menuProps} />
         </header>
         <ChangeProfile {...changeProfileProps} />
         <ChangeName {...changeNameProps} />
         <LogoutPrompt {...logoutPromptProps} />
      </>
   );
};

export default Header;
