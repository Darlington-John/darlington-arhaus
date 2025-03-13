'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import view from '~/public/images/view.webp';
import { useEffect } from 'react';
import { checkToken } from '~/lib/utils/check-token';
export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const router = useRouter();
   useEffect(() => {
      const handleRedirect = async () => {
         const hasToken = await checkToken();
         if (hasToken) {
            router.push('/');
         }
      };
      handleRedirect();
   }, [router]);
   return (
      <main className="relative   ">
         <Image
            src={view}
            className="w-full h-full absolute object-cover z-[1]"
            alt="view"
            priority
         />
         {children}
      </main>
   );
}
