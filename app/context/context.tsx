'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import React, {
   createContext,
   useState,
   useMemo,
   useContext,
   useEffect,
   Suspense,
} from 'react';
import { usePopup } from '~/lib/utils/toggle-popups';

export const Context = createContext<any>(null);
const SearchParamsProvider = ({
   children,
   linkname,
   isOverlayOpen,
   setIsOverlayOpen,
   isAdminOverlayOpen,
   setIsAdminOverlayOpen,
   isSearchBarVisible,
   searchBar,
   setSearchBar,
   searchBarRef,
   toggleSearchBarPopup,
}: any) => {
   const searchParams = useSearchParams();
   const searchQuery = searchParams.get('search') || '';

   useEffect(() => {
      setSearchBar(false);
   }, [linkname, searchQuery]);

   const [currentDir, setCurrentDir] = useState('');

   const providerValue = useMemo(
      () => ({
         isOverlayOpen,
         setIsOverlayOpen,
         isSearchBarVisible,
         searchBar,
         searchBarRef,
         toggleSearchBarPopup,
         currentDir,
         setCurrentDir,
         isAdminOverlayOpen,
         setIsAdminOverlayOpen,
      }),
      [
         isOverlayOpen,
         setIsOverlayOpen,
         isSearchBarVisible,
         searchBar,
         searchBarRef,
         toggleSearchBarPopup,
         currentDir,
         setCurrentDir,
         isAdminOverlayOpen,
         setIsAdminOverlayOpen,
      ]
   );

   return <Context.Provider value={providerValue}>{children}</Context.Provider>;
};
export const ContextProvider = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const [isOverlayOpen, setIsOverlayOpen] = useState<any>(false);
   const [isAdminOverlayOpen, setIsAdminOverlayOpen] = useState(false);
   const {
      isVisible: isSearchBarVisible,
      isActive: searchBar,
      setIsActive: setSearchBar,
      ref: searchBarRef,
      togglePopup: toggleSearchBarPopup,
   } = usePopup();
   const linkname = usePathname();

   // Wrap useSearchParams inside Suspense
   return (
      <Suspense fallback={null}>
         <SearchParamsProvider
            linkname={linkname}
            isOverlayOpen={isOverlayOpen}
            setIsOverlayOpen={setIsOverlayOpen}
            isAdminOverlayOpen={isAdminOverlayOpen}
            setIsAdminOverlayOpen={setIsAdminOverlayOpen}
            isSearchBarVisible={isSearchBarVisible}
            setSearchBar={setSearchBar}
            searchBar={searchBar}
            searchBarRef={searchBarRef}
            toggleSearchBarPopup={toggleSearchBarPopup}
         >
            {children}
         </SearchParamsProvider>
      </Suspense>
   );
};

// Separate Component to handle useSearchParams

export const MainContext = () => useContext(Context);
