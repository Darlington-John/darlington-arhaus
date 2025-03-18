'use client';
import { useEffect, useState } from 'react';
import PageWrapper from '../components/page-wrapper';
import EmptyPrompt from '../products/components/empty-prompt';
import { useOrders } from '~/app/context/orders-context';
import { OrdersType } from '~/types/orders';
import { usersType } from '~/types/users';
import Row from './table/row';
const Transactions = () => {
   const { orders, loading } = useOrders() as {
      orders: OrdersType[];
      loading: boolean;
   };
   const [users, setUsers] = useState<Record<string, usersType>>({});
   const [errorFetching, setErrorFetching] = useState(false);
   useEffect(() => {
      const fetchUsers = async () => {
         const userIds = [...new Set(orders?.map((order) => order.user_id))];
         const userDetails: Record<string, usersType> = {};

         await Promise.all(
            userIds?.map(async (userId) => {
               try {
                  const res = await fetch(`/api/admin/users/${userId}`);

                  if (!res.ok) {
                     setErrorFetching(true);
                     return;
                  }
                  const data = await res.json();
                  userDetails[userId] = data;
               } catch (error) {
                  setErrorFetching(true);
               }
            })
         );

         setUsers(userDetails);
      };
      (async () => {
         if (orders?.length > 0) {
            await fetchUsers().catch((error) => console.error('Error', error));
         }
      })();
   }, [orders]);

   const rowProps = {
      users,
      orders,
   };
   return (
      <PageWrapper fetching={loading} errorFetching={errorFetching}>
         <section className="flex flex-col gap-2  py-6 px-4 md:gap-4 ">
            <div className="flex items-center justify-between w-full 2xs:flex-col 2xs:gap-2 2xs:items-start ">
               <h1 className="flex text-3xl neue-thin capitalize  md:text-2xl  sm:text-xl">
                  Most recent transactions
               </h1>
            </div>
            {orders?.length > 0 ? (
               <Row {...rowProps} />
            ) : (
               <EmptyPrompt content="Transactions" />
            )}
         </section>
      </PageWrapper>
   );
};

export default Transactions;
