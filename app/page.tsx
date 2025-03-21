'use client';
import { MainContext } from './context/context';
import CoburnReclining from './sections/home/coburn-reclining';
import Cozy from './sections/home/cozy-on-sale';
import Features from './sections/home/features';
import FinnleyCollection from './sections/home/finnley-collection';
import Hero from './sections/home/hero';
import HolidayDecorOff from './sections/home/holiday-decor-off';
import ShowroomExperience from './sections/home/showroom-experience';

export default function Home() {
   const { isOverlayOpen } = MainContext();

   return (
      <main
         className={`bg-brown  ${isOverlayOpen && 'overflow-hidden  Hahahaha'}`}
      >
         <Hero />
         <HolidayDecorOff />
         <Features />
         <FinnleyCollection />
         <Cozy />
         <CoburnReclining />
         <ShowroomExperience />
      </main>
   );
}
