'use client';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import React, {
   createContext,
   useEffect,
   useState,
   useMemo,
   useContext,
} from 'react';

export const UserContext = createContext<any>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
   const [user, setUser] = useState<any>(null);
   const [users, setUsers] = useState<any>(null);
   const [loading, setLoading] = useState(true);
   const [usersLoading, setUsersLoading] = useState(true);
   const { data: session } = useSession();

   useEffect(() => {
      if (session) {
         const setCustomCookie = async () => {
            try {
               const res = await fetch('/api/auth/custom');
               if (res.ok) {
                  console.log('Custom cookie set successfully.');
               } else {
                  console.warn('Failed to set custom cookie.');
               }
            } catch (error) {
               console.error('Error setting custom cookie:', error);
            }
         };

         const dispatch = async () => {
            try {
               const res = await fetch('/api/auth/user');
               if (res.ok) {
                  window.dispatchEvent(new CustomEvent('userUpdated'));
               } else {
                  console.log('Failed to fetch user data.');
               }
            } catch (error) {
               console.log('Error fetching user data:', error);
            }
         };

         const runFunctionsInOrder = async () => {
            await setCustomCookie();
            await dispatch();
         };

         runFunctionsInOrder();
      }
   }, [session]);
   const clearCookies = async () => {
      try {
         const response = await fetch('/api/clear-cookies', {
            method: 'POST',
         });
         const data = await response.json();
      } catch (error) {
         console.error('Error clearing cookies:', error);
      }
   };
   const pathname = usePathname();
   useEffect(() => {
      const fetchUser = async () => {
         try {
            const res = await fetch('/api/auth/user', {
               credentials: 'include',
            });

            if (res.ok) {
               const data = await res.json();
               setUser(data.user);
            } else if ([401, 404, 500].includes(res.status)) {
               clearCookies();
               setUser(null);
            } else {
               console.warn('Unexpected response status:', res.status);
            }
         } catch (err) {
            setUser(null);
         } finally {
            setLoading(false);
         }
      };

      fetchUser();

      const handleUserUpdated = () => {
         fetchUser();
      };

      window.addEventListener('userUpdated', handleUserUpdated);

      return () => {
         window.removeEventListener('userUpdated', handleUserUpdated);
      };
   }, [pathname]);

   useEffect(() => {
      const fetchUsers = async () => {
         try {
            const res = await fetch('/api/auth/users');

            if (res.ok) {
               const data = await res.json();
               setUsers(data.users);
            } else if ([401, 404, 500].includes(res.status)) {
               setUsers(null);
            } else {
               console.warn('Unexpected response status:', res.status);
            }
         } catch (err) {
            setUsers(null);
         } finally {
            setUsersLoading(false);
         }
      };

      fetchUsers();

      const handleUsersUpdated = () => {
         fetchUsers();
      };

      window.addEventListener('usersUpdated', handleUsersUpdated);

      return () => {
         window.removeEventListener('usersUpdated', handleUsersUpdated);
      };
   }, []);

   const [createPassword, setCreatePassword] = useState(false);
   const providerValue = useMemo(
      () => ({
         user,
         loading,
         createPassword,
         setCreatePassword,
         users,
         usersLoading,
      }),
      [user, loading, createPassword, setCreatePassword, users, setUsersLoading]
   );

   return (
      <UserContext.Provider value={providerValue}>
         {children}
      </UserContext.Provider>
   );
};
export const useUser = () => useContext(UserContext);
