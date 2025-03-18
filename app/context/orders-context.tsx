'use client';
import React, {
   createContext,
   useEffect,
   useState,
   useMemo,
   useContext,
} from 'react';
import { houseHoldMaterials } from '../components/menu-header/test';

export const OrdersContext = createContext<any>(null);

export const OrdersProvider = ({ children }: { children: React.ReactNode }) => {
   const [orders, setOrders] = useState<any>(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchOrders = async () => {
         try {
            const res = await fetch('/api/orders/fetch-orders', {
               credentials: 'include',
            });

            if (res.ok) {
               const data = await res.json();
               setOrders(data.orders);
            } else {
               console.error(
                  'Failed to fetch orders. Using household materials.'
               );
            }
         } catch (err) {
            console.error('Error fetching orders:', err);
         } finally {
            setLoading(false);
         }
      };

      const dispatchCustomEvent = async () => {
         try {
            const res = await fetch('/api/orders/fetch-orders', {
               credentials: 'include',
            });

            if (res.ok) {
               const data = await res.json();
               setOrders(data.orders);
            } else {
               console.warn('Failed to fetch orders during custom dispatch.');
            }
         } catch (err) {
            console.error('Error during custom dispatch:', err);
         }
      };

      (async () => {
         await fetchOrders().catch((error) => console.error('Error', error));
      })();
      const interval = setInterval(fetchOrders, 5 * 60 * 1000);

      const handleCustomDispatch = () => {
         dispatchCustomEvent().catch((error) => console.error('Error', error));
      };

      window.addEventListener('ordersUpdated', handleCustomDispatch);

      return () => {
         clearInterval(interval);
         window.removeEventListener('ordersUpdated', handleCustomDispatch);
      };
   }, []);

   const providerValue = useMemo(
      () => ({ orders, loading }),
      [orders, loading]
   );

   return (
      <OrdersContext.Provider value={providerValue}>
         {children}
      </OrdersContext.Provider>
   );
};
export const useOrders = () => useContext(OrdersContext);
