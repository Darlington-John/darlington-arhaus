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
      const fetchRooms = async () => {
         try {
            const res = await fetch('/api/rooms/fetch-rooms', {
               credentials: 'include',
            });

            if (res.ok) {
               const data = await res.json();
               setRooms(data.rooms);
               console.log('rooms', data.rooms);
            } else {
               console.warn('Failed to fetch Rooms. Using default data.');
            }
         } catch (err) {
            console.error('Error fetching Rooms:', err);
         } finally {
            setLoading(false);
         }
      };

      const dispatchCustomEvent = async () => {
         try {
            const res = await fetch('/api/rooms/fetch-rooms', {
               credentials: 'include',
            });

            if (res.ok) {
               const data = await res.json();
               setRooms(data.rooms);
            } else {
               console.warn('Failed to fetch Rooms during custom dispatch.');
            }
         } catch (err) {
            console.error('Error during custom dispatch:', err);
         }
      };
      (async () => {
         await fetchRooms().catch((error) => console.error('Error', error));
      })();

      const interval = setInterval(fetchRooms, 5 * 60 * 1000);

      const handleCustomDispatch = () => {
         dispatchCustomEvent().catch((error) =>
            console.error('Error fetching wishlist:', error)
         );
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
