'use client';
import { useEffect, useState } from 'react';
import PageWrapper from '../components/page-wrapper';
import EmptyPrompt from '../products/components/empty-prompt';
import { useOrders } from '~/app/context/orders-context';
import { OrdersType } from '~/types/orders';
import { usersType } from '~/types/users';
import { apiRequest } from '~/lib/utils/api-request';
import Image from 'next/image';
import moreIcon from '~/public/icons/more.svg';
import Row from './table/row';
const Transactions = () => {
   const { orders, loading } = useOrders() as {
      orders: OrdersType[];
      loading: boolean;
   };
   const [users, setUsers] = useState<Record<string, usersType>>({});

   useEffect(() => {
      const fetchUsers = async () => {
         const userIds = [...new Set(orders?.map((order) => order.user_id))]; // Get unique user IDs
         const userDetails: Record<string, usersType> = {};

         await Promise.all(
            userIds?.map(async (userId) => {
               try {
                  const res = await fetch(`/api/admin/users/${userId}`);
                  const data = await res.json();
                  if (res.ok) {
                     userDetails[userId] = data; // Store user data using userId as key
                  }
               } catch (error) {
                  console.error('Error fetching user:', error);
               }
            })
         );

         setUsers(userDetails);
      };

      if (orders?.length > 0) fetchUsers();
   }, [orders]);

   const rowProps = {
      users,
      orders,
   };
   return (
      <PageWrapper fetching={loading} errorFetching={false}>
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
