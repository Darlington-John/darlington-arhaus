'use client';
import React, {
   createContext,
   useEffect,
   useState,
   useMemo,
   useContext,
} from 'react';
import { roomsDummy } from '../dummy-data';

export const RoomsContext = createContext<any>(null);

export const RoomsProvider = ({ children }: { children: React.ReactNode }) => {
   const [rooms, setRooms] = useState<any>(roomsDummy);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchRooms = async (context = 'initial') => {
         try {
            const res = await fetch('/api/rooms/fetch-rooms', {
               credentials: 'include',
            });

            if (res.ok) {
               const data = await res.json();
               setRooms(data.rooms);
               if (context === 'initial') console.log('rooms', data.rooms);
            } else {
               console.warn(`Failed to fetch Rooms during ${context}.`);
            }
         } catch (err) {
            console.error(`Error fetching Rooms during ${context}:`, err);
         } finally {
            if (context === 'initial') setLoading(false);
         }
      };

      // Initial fetch
      fetchRooms();

      // Refetch every 5 minutes
      const interval = setInterval(() => fetchRooms('interval'), 5 * 60 * 1000);

      // Handle custom event
      const handleCustomDispatch = () => {
         fetchRooms('customDispatch');
      };

      window.addEventListener('customRoomsUpdate', handleCustomDispatch);

      return () => {
         clearInterval(interval);
         window.removeEventListener('customRoomsUpdate', handleCustomDispatch);
      };
   }, []);

   const providerValue = useMemo(() => ({ rooms, loading }), [rooms, loading]);

   return (
      <RoomsContext.Provider value={providerValue}>
         {children}
      </RoomsContext.Provider>
   );
};
export const useRooms = () => useContext(RoomsContext);
