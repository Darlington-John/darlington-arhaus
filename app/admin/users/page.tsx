'use client';

import Image from 'next/image';
import PageWrapper from '../components/page-wrapper';
import EmptyPrompt from '../products/components/empty-prompt';
import plusIcon from '~/public/icons/plus.svg';
import { useState } from 'react';
import { useRooms } from '~/app/context/rooms-context';
import { useUser } from '~/app/context/auth-context';
import { usersType } from '~/types/users';
import UserCard from '~/app/admin/components/user-cards.tsx/users-card';
import { IUser } from '~/lib/models/user';
const Users = () => {
   const { users, usersLoading, user } = useUser() as {
      users: usersType[];
      usersLoading: boolean;
      user: IUser;
   };

   // const filteredUsers = users?.filter((u) => u._id !== user?._id);
   return (
      <PageWrapper fetching={usersLoading} errorFetching={false}>
         <section className="flex flex-col gap-8  py-6 px-4 ">
            <div className="flex items-center justify-between w-full 2xs:flex-col 2xs:gap-2 2xs:items-start ">
               <h1 className="flex text-3xl neue-thin uppercase md:text-2xl  sm:text-xl">
                  Users ({users?.length})
               </h1>
            </div>
            {users?.length > 0 ? (
               <div className="flex gap-4 w-full flex-wrap">
                  {users.map((data) => (
                     <UserCard {...data} key={data?._id} />
                  ))}
               </div>
            ) : (
               <EmptyPrompt content="Users" />
            )}
         </section>
      </PageWrapper>
   );
};

export default Users;
