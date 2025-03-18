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
               if (!res.ok) {
                  console.error('Failed to set custom cookie.');
                  return;
               }
            } catch (error) {
               console.error('Error setting custom cookie:', error);
            }
         };

         const dispatch = async () => {
            try {
               const res = await fetch('/api/auth/user');
               if (!res.ok) {
                  return;
               }

               window.dispatchEvent(new CustomEvent('userUpdated'));
            } catch (error) {
               console.error('Error fetching user data:', error);
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

            if (!res.ok) {
               clearCookies();
               setUser(null);
               return;
            }

            const data = await res.json();
            setUser(data.user);
         } catch (err) {
            clearCookies();
            setUser(null);
         } finally {
            setLoading(false);
         }
      };

      (async () => {
         await fetchUser().catch((error) => console.error('Error', error));
      })();
      const handleUserUpdated = () => {
         fetchUser().catch((error) => console.error('Error', error));
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

            if (!res.ok) {
               setUsers(null);
               return;
            }
            const data = await res.json();
            setUsers(data.users);
         } catch (err) {
            setUsers(null);
         } finally {
            setUsersLoading(false);
         }
      };

      (async () => {
         await fetchUsers().catch((error) => console.error('Error', error));
      })();
      const handleUsersUpdated = () => {
         fetchUsers().catch((error) => console.error('Error', error));
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
