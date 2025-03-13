'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import React, {
   createContext,
   useState,
   useMemo,
   useContext,
   useEffect,
} from 'react';
import { usePopup } from '~/lib/utils/toggle-popups';

export const Context = createContext<any>(null);

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
export const MainContext = () => useContext(Context);
