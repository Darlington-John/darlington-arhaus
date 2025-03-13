import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import Header from './components/header/header';
import { UserProvider } from './context/auth-context';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NextAuthProvider } from './providers';
import { ContextProvider } from './context/context';
import Overlay from './components/overlay/overlay';
import Footer from './components/footer/footer';
import { OrdersProvider } from './context/orders-context';
import AdminOverlay from './admin/products/components/overlay';
import { RoomsProvider } from './context/rooms-context';

const Louize = localFont({
   src: './fonts/LouizeDisplay.ttf',
   variable: '--font-louize',
});
const Neue = localFont({
   src: './fonts/neue-reg.ttf',
   variable: '--font-neue',
});
const NeueThin = localFont({
   src: './fonts/neue.ttf',
   variable: '--font-neue-thin',
});
const NeueLight = localFont({
   src: './fonts/neue-light.ttf',
   variable: '--font-neue-light',
});
const NeueBold = localFont({
   src: './fonts/neue-bold.ttf',
   variable: '--font-neue-bold',
});
export const metadata: Metadata = {
   title: 'Arhaus',
   description: 'Quality Home and Outdoor Furniture',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${Louize.variable} ${Neue.variable}  ${NeueThin.variable} ${NeueBold.variable}  ${NeueLight.variable} antialiased  flex flex-col justify-between  min-h-screen  `}
         >
            <ToastContainer position="bottom-right" closeButton={false} />
            <NextAuthProvider>
               <ContextProvider>
                  <OrdersProvider>
                     <RoomsProvider>
                        <UserProvider>
                           <Header />
                           <Overlay />
                           <AdminOverlay />
                           {children}
                           <Footer />
                        </UserProvider>
                     </RoomsProvider>
                  </OrdersProvider>
               </ContextProvider>
            </NextAuthProvider>
         </body>
      </html>
   );
}
