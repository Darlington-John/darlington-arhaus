'use client';
import { useState } from 'react';
import CustomerAddress from './customer-address';
import DeliveryDetails from './delivery-details';
import { useUser } from '~/app/context/auth-context';
import OrderSummary from './order-summary/order-summary';
const CheckOut = (props: any) => {
   const {
      mergedBag,
      quantities,
      setQuantities,
      totalPrice,
      totalCancelledPrice,
      setCheckout,
   } = props;
   const [phone, setPhone] = useState('');
   const [addPhone, setAddPhone] = useState('');
   const [error, setError] = useState('');
   const [address, setAddress] = useState('');
   const [addInfo, setAddInfo] = useState('');
   const [selectedState, setSelectedState] = useState<string>('');
   const [city, setCity] = useState<string>('');
   const [places, setPlaces] = useState<string[]>([]);
   const [delivery, setDelivery] = useState('pick-up');
   const [defaultAddress, setDefaultAddress] = useState(false);
   const [selectedStation, setSelectedStation] = useState<{
      name: string;
      city: string;
      lat: number;
      street: string;
      lng: number;
   } | null>(null);
   const toggleDefaultAdress = () => {
      setDefaultAddress(!defaultAddress);
   };
   const [step1Complete, setStep1Complete] = useState(false);
   const [step2Complete, setStep2Complete] = useState(false);

   const customAddressProps = {
      step1Complete,
      step2Complete,
      setStep1Complete,
      setStep2Complete,
      phone,
      setPhone,
      address,
      setAddress,
      addInfo,
      setAddInfo,
      error,
      setError,
      addPhone,
      setAddPhone,
      selectedState,
      setSelectedState,
      places,
      setPlaces,
      defaultAddress,
      city,
      setCity,
      toggleDefaultAdress,
   };

   const deliveryDetailsProps = {
      step2Complete,
      step1Complete,
      setStep2Complete,
      delivery,
      setDelivery,
      error,
      selectedStation,
      setSelectedStation,
   };
   const orderSummaryProps = {
      totalPrice,
      delivery,
      step1Complete,
      step2Complete,
      phone,
      addPhone,
      address,
      addInfo,
      selectedState,
      city,
      defaultAddress,
      mergedBag,
      quantities,
      setQuantities,
      totalCancelledPrice,
      setCheckout,
      selectedStation,
      setSelectedStation,
   };

   return (
      <div className="flex items-start  gap-5 px-28 pb-10 xl:px-0  lg:gap-3  md:flex-col ">
         <div className="flex flex-col w-[60%] gap-3   md:w-full">
            <CustomerAddress {...customAddressProps} />
            <DeliveryDetails {...deliveryDetailsProps} />
         </div>

         <OrderSummary {...orderSummaryProps} />
      </div>
   );
};

export default CheckOut;
