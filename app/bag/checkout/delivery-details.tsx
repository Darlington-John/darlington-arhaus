import Image from 'next/image';
import checkIcon from '~/public/icons/check.svg';
import give from '~/public/icons/give.svg';
import truck from '~/public/icons/truck.svg';
import map from '~/public/icons/map.svg';
import loadingIcon from '~/public/icons/double-loading.svg';
import { usePopup } from '~/lib/utils/toggle-popups';
import closeIcon from '~/public/icons/x-black.svg';
import locationIcon from '~/public/icons/loc.svg';
import { useState } from 'react';
const DeliveryDetails = (props: any) => {
   const {
      step2Complete,
      step1Complete,
      setStep2Complete,
      delivery,
      setDelivery,
      selectedStation,
      setSelectedStation,
   } = props;
   const {
      isVisible: isPickupStationsVisible,
      isActive: pickupStations,
      ref: pickupStationsRef,
      togglePopup: togglePickupStations,
   } = usePopup();
   const [error, setError] = useState('');
   const [markets, setMarkets] = useState<any[]>([]);
   const [userLocation, setUserLocation] = useState<{
      lat: number;
      lng: number;
   } | null>(null);
   const [stationsLoading, setStationsLoading] = useState(true);
   const [stationError, setStationError] = useState<string | null>(null);
   const getMarkets = async () => {
      setStationsLoading(true);
      setStationError(null);

      if (!navigator.geolocation) {
         setStationError('Geolocation is not supported.');
         setStationsLoading(false);
         return;
      }

      try {
         const permission = await navigator.permissions.query({
            name: 'geolocation' as PermissionName,
         });

         if (permission.state === 'denied') {
            setStationError(
               'Location access is blocked. Please enable it in browser settings.'
            );
            setStationsLoading(false);
            return;
         }

         navigator.geolocation.getCurrentPosition(
            (position) => {
               const { latitude: lat, longitude: lng } = position.coords;
               setUserLocation({ lat, lng });

               // Run the fetch request inside a separate function to avoid async issues
               const fetchMarkets = async () => {
                  try {
                     const res = await fetch(
                        `/api/gas-stations?lat=${lat}&lng=${lng}`
                     );
                     if (!res.ok)
                        throw new Error(
                           `Error fetching gas stations: ${res.statusText}`
                        );

                     const data = await res.json();
                     setMarkets(data);
                  } catch (err: any) {
                     setStationError(err.message);
                  } finally {
                     setStationsLoading(false);
                  }
               };

               fetchMarkets(); // Call the async function
            },
            (error) => {
               if (error.code === 1) {
                  setStationError(
                     'Location access denied. Enable location in browser settings.'
                  );
               } else {
                  setStationError(`Error getting location: ${error.message}`);
               }
               setStationsLoading(false);
            }
         );
      } catch (err: any) {
         setStationError('Failed to check location permissions.');
         setStationsLoading(false);
      }
   };

   const getWeekDate = (days: number) => {
      const date = new Date();
      date.setDate(date.getDate() + days);
      const options: Intl.DateTimeFormatOptions = {
         day: 'numeric',
         month: 'long',
      };
      return date.toLocaleDateString('en-GB', options);
   };

   return (
      <div className="w-full bg-white rounded-lg   flex flex-col gap-5  px-2  border border-lightGrey">
         <div className="py-2 flex items-center w-full justify-between">
            <div className="flex w-full items-center gap-2   ">
               <span
                  className={` w-5 h-5  rounded-full flex items-center justify-center ${
                     step2Complete ? 'bg-[#6dbd28] ' : 'bg-[#d4d4d6]'
                  }`}
               >
                  <Image src={checkIcon} alt="" className="w-3" />
               </span>
               <span className="text-base neue-light   uppercase  ">
                  2. delivery details
               </span>
            </div>
            {step2Complete && (
               <button
                  className="text-[#264996] text-xs uppercase"
                  onClick={() => setStep2Complete(false)}
               >
                  Change
               </button>
            )}
         </div>
         {step1Complete && !step2Complete && (
            <>
               <div className="flex  flex-col gap-6  w-full px-4">
                  <div className="flex flex-col gap-5 w-full">
                     <div className="flex items-center w-full justify-between">
                        <div className="flex gap-2  items-start">
                           <button
                              className={` w-5 h-5  rounded-full flex items-center justify-center hover:ring ring-lightGreen  hover:ring-[6px] duration-300  ${
                                 delivery === 'pick-up'
                                    ? ' bg-softGreen'
                                    : ' border-[#d4d4d6] border-2'
                              }`}
                              onClick={() => {
                                 setDelivery('pick-up');
                                 setError('');
                              }}
                           >
                              {delivery === 'pick-up' && (
                                 <Image
                                    src={checkIcon}
                                    alt=""
                                    className="w-3"
                                 />
                              )}
                           </button>
                           <div className="flex flex-col gap-1 ">
                              <h1 className="text-sm neue-light leading-none">
                                 <span className="neue-bold">
                                    Pick-up Station
                                 </span>{' '}
                                 <span className="text-xs">(from ₦10)</span>
                              </h1>
                              <h1 className="text-xs neue-light">
                                 Delivery between{' '}
                                 <span className="neue-bold">
                                    {getWeekDate(7)}
                                 </span>{' '}
                                 and{' '}
                                 <span className="neue-bold">
                                    {getWeekDate(9)}
                                 </span>
                                 .
                              </h1>
                           </div>
                        </div>
                        <Image src={truck} className="w-6" alt="" />
                     </div>
                     <div className="border border-lightGrey rounded-md  flex flex-col gap-4 py-4  ">
                        <div className="flex items-center w-full justify-between  px-3 border-b border-b-lightGrey pb-3">
                           <h1 className="text-sm  neue-bold ">
                              Pickup station
                           </h1>
                           <button
                              className="text-xs uppercase text-[#264996] "
                              onClick={() => {
                                 togglePickupStations();
                                 getMarkets();
                              }}
                           >
                              {selectedStation
                                 ? 'Change'
                                 : 'Select Pickup station'}
                           </button>
                        </div>
                        <div className="flex gap-2 items-start px-3 ">
                           <div className="h-10 w-10 rounded-full bg-lightGrey flex items-center justify-center ">
                              <Image
                                 src={selectedStation ? locationIcon : map}
                                 alt=""
                                 className="w-6"
                              />
                           </div>
                           <div>
                              <h1 className="text-sm">
                                 {selectedStation
                                    ? selectedStation.name
                                    : 'No pick station Selected'}
                              </h1>
                              <h1 className="text-grey text-xs">
                                 {selectedStation
                                    ? `  ${
                                         selectedStation.street ||
                                         'Unknown Street'
                                      }, 
                                          ${
                                             selectedStation.city ||
                                             'Unknown City'
                                          }`
                                    : 'No pick station Selected'}
                              </h1>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="flex w-full">
                     <div className="flex items-center w-full justify-between">
                        <div className="flex gap-2  items-start">
                           <button
                              className={` w-5 h-5  rounded-full flex items-center justify-center hover:ring ring-lightGreen  hover:ring-[6px] duration-300  ${
                                 delivery === 'door-delivery'
                                    ? ' bg-softGreen'
                                    : ' border-[#d4d4d6] border-2'
                              }`}
                              onClick={() => {
                                 setDelivery('door-delivery');
                                 setError('');
                              }}
                           >
                              {delivery === 'door-delivery' && (
                                 <Image
                                    src={checkIcon}
                                    alt=""
                                    className="w-3"
                                 />
                              )}
                           </button>
                           <div className="flex flex-col gap-1 ">
                              <h1 className="text-sm neue-light leading-none">
                                 <span className="neue-bold">
                                    Door delivery
                                 </span>{' '}
                                 <span className="text-xs">(from ₦20)</span>
                              </h1>
                              <h1 className="text-xs neue-light">
                                 Delivery between{' '}
                                 <span className="neue-bold">
                                    {getWeekDate(8)}
                                 </span>{' '}
                                 and{' '}
                                 <span className="neue-bold">
                                    {getWeekDate(11)}
                                 </span>
                                 .
                              </h1>
                           </div>
                        </div>
                        <Image src={give} className="w-6" alt="" />
                     </div>
                  </div>
               </div>
               {error && (
                  <h1 className="text-[11px] neue-light text-red text-center">
                     {error}
                  </h1>
               )}
               <div className="flex w-full items-center gap-2  py-3  border-t  border-t-lightGrey justify-end px-4 ">
                  <button
                     className="h-[40px] px-5 rounded  text-sm duration-150   text-white  bg-softGreen  hover:ring-[2px] ring-softGreen  ring-offset-1   "
                     onClick={() => {
                        if (delivery === 'pick-up' && !selectedStation) {
                           setError('Select a pickup station');
                        } else {
                           setStep2Complete(true);
                           setError('');
                        }
                     }}
                  >
                     Save
                  </button>
               </div>
            </>
         )}
         {pickupStations && (
            <div className="fixed bottom-[0px]  h-full w-full  z-[150] left-0 flex  justify-center  items-center        backdrop-brightness-50  px-8     xs:px-0">
               <div
                  className={`w-[700px]     mid-popup   duration-300 ease-in-out flex flex-col py-6 px-6  gap-4   rounded-lg bg-greyGreen  md:w-[350px] md:px-3 md:py-3      ${
                     isPickupStationsVisible ? '' : 'mid-popup-hidden'
                  }`}
                  ref={pickupStationsRef}
               >
                  <div className="flex flex-col gap-5 md:gap-3 ">
                     <div className="flex items-center justify-between w-full">
                        <h1 className="text-sm neue-light  tracking-widest ">
                           Select a pick-up station close to you
                        </h1>
                        <Image
                           src={closeIcon}
                           alt=""
                           className="w-4 cursor-pointer md:w-3"
                           onClick={() => {
                              togglePickupStations();
                              setSelectedStation(null);
                           }}
                        />
                     </div>
                     <div className="h-auto  w-full md:h-[350px] md:overflow-auto ">
                        {stationsLoading ? (
                           <div className="w-full  flex items-center justify-center  h-[350px] md:h-[350px]">
                              <Image
                                 src={loadingIcon}
                                 alt=""
                                 className="w-16"
                              />
                           </div>
                        ) : markets.length > 0 ? (
                           <div className=" w-full  gap-6 grid grid-cols-2 md:flex md:flex-col md:gap-4 ">
                              {markets.slice(0, 10).map((station) => (
                                 <div
                                    key={station.id}
                                    className="flex items-start gap-3 md:gap-2"
                                 >
                                    <button
                                       className={` w-5 h-5  rounded-full flex items-center justify-center hover:ring ring-lightGreen  hover:ring-[6px] duration-300 shrink-0 md:h-4 md:w-4 md:hover:ring-[0px]   ${
                                          selectedStation?.name === station.name
                                             ? ' bg-softGreen'
                                             : ' border-[#d4d4d6] border-2'
                                       }`}
                                       onClick={() => {
                                          setSelectedStation({
                                             name: station.name,
                                             city: station.city,
                                             street: station.street,
                                             lat: station.lat,
                                             lng: station.lng,
                                          });
                                          setError('');
                                       }}
                                    >
                                       {selectedStation?.name ===
                                          station.name && (
                                          <Image
                                             src={checkIcon}
                                             alt=""
                                             className="w-3 md:w-2"
                                          />
                                       )}
                                    </button>
                                    <div className="flex flex-col gap-2  md:gap-0">
                                       <h1 className="  text-sm  uppercase spaced leading-none md:text-xs">
                                          {station.name}
                                       </h1>
                                       <h1 className="text-sm neue-light leading-none text-grey md:text-xs">
                                          {station.street || 'Unknown Street'},{' '}
                                          {station.city || 'Unknown City'}
                                       </h1>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        ) : (
                           <p className="w-full text-xs uppercase  neue-light   text-center">
                              No pick-up stations found.
                           </p>
                        )}
                     </div>
                     {markets.length > 0 && !stationError && (
                        <div className="flex gap-4 w-full">
                           <button
                              className="flex items-center justify-center  gap-2  h-[40px]  px-2 rounded-md bg-softGreen   duration-150 hover:ring hover:ring-[2px]  ring-softGreen  ring-offset-2  text-center w-[50%]"
                              onClick={togglePickupStations}
                              disabled={!selectedStation || stationsLoading}
                           >
                              <span className=" text-white uppercase  text-xs  text-center">
                                 Select station
                              </span>
                           </button>
                           <button
                              className="flex items-center justify-center  gap-2  h-[40px]  px-2 rounded-md bg-grey     duration-150 hover:ring hover:ring-[2px]  ring-grey    ring-offset-2  text-center w-[50%] text-white "
                              onClick={() => {
                                 togglePickupStations();
                                 setSelectedStation(null);
                              }}
                           >
                              Cancel
                           </button>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default DeliveryDetails;
