import Image from 'next/image';
import ClassicInput from '~/app/admin/products/components/inputs/classic-input';
import checkIcon from '~/public/icons/check.svg';
import statesData from './state-data';

const CustomerAddress = (props: any) => {
   const {
      step1Complete,
      setStep1Complete,
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
      city,
      setCity,
   } = props;
   const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const country = e.target.value;
      setSelectedState(country);
      setPlaces(statesData[country] || []);
   };

   const handleSave = () => {
      const check = !(phone && address && selectedState && city);
      if (check) {
         setError('Please fill all required fields');
         return;
      }
      setError('');
      setStep1Complete(true);
   };

   return (
      <div className="w-full bg-white rounded-lg   flex flex-col gap-5  px-2  border border-lightGrey  xs:gap-3">
         <div className="py-2 flex items-center w-full justify-between">
            <div className="flex w-full items-center gap-2   ">
               <span
                  className={` w-5 h-5  rounded-full flex items-center justify-center ${
                     step1Complete ? 'bg-[#6dbd28] ' : 'bg-[#d4d4d6]'
                  }`}
               >
                  <Image src={checkIcon} alt="" className="w-3" />
               </span>
               <span className="text-base neue-light   uppercase  ">
                  1. customer address
               </span>
            </div>
            {step1Complete && (
               <button
                  className="text-[#264996] text-xs uppercase"
                  onClick={() => setStep1Complete(false)}
               >
                  Change
               </button>
            )}
         </div>
         {!step1Complete && (
            <>
               <div className="flex  flex-col gap-6  w-full px-4 xs:gap-3 ">
                  <div className="flex items-center gap-6  dxs:flex-col xs:gap-3 ">
                     <ClassicInput
                        label="Phone number"
                        value={phone}
                        setValue={setPhone}
                        name="phone"
                        inputType="tel"
                        error={error}
                        errorContent="Please fill all required fields"
                        setError={setError}
                        placeholder="Enter you phone number"
                     />

                     <ClassicInput
                        label="Additional Phone number"
                        value={addPhone}
                        setValue={setAddPhone}
                        name="phone2"
                        inputType="tel"
                        error={error}
                        setError={setError}
                        placeholder="Enter additional phone number"
                     />
                  </div>
                  <ClassicInput
                     label="Delivery address"
                     value={address}
                     setValue={setAddress}
                     error={error}
                     setError={setError}
                     name="addressLine1"
                     errorContent="Please fill all required fields"
                     placeholder="Enter your delivery address"
                  />
                  <ClassicInput
                     label="Additional information"
                     value={addInfo}
                     setValue={setAddInfo}
                     error={error}
                     setError={setError}
                     placeholder="Enter additional information"
                  />
                  <div
                     className="flex gap-2 w-full
        "
                  >
                     <div className="flex flex-col gap-0 w-full ">
                        <h1 className="text-[11px]    neue    text-darkGrey  neue-light uppercase">
                           State
                        </h1>
                        <select
                           className={`border    h-[40px] text-sm text-grey  ${
                              error === 'Please fill all required fields' &&
                              selectedState === ''
                                 ? 'border-red'
                                 : 'border-grey'
                           }`}
                           onChange={(e) => {
                              handleCountryChange(e);
                              setError('');
                           }}
                           value={selectedState}
                        >
                           <option value="" className="text-xs">
                              Select a State
                           </option>
                           {Object.keys(statesData).map((state) => (
                              <option key={state} value={state}>
                                 {state}
                              </option>
                           ))}
                        </select>
                     </div>

                     <div className="flex flex-col gap-0 w-full ">
                        <h1 className="text-[11px]    neue    text-darkGrey  neue-light uppercase">
                           City
                        </h1>
                        <select
                           className={`border h-[40px] text-sm text-grey ${
                              error === 'Please fill all required fields' &&
                              !city
                                 ? 'border-red'
                                 : 'border-grey'
                           }`}
                           disabled={!selectedState}
                           value={city}
                           onChange={(e) => {
                              setCity(e.target.value);
                              setError('');
                           }}
                        >
                           <option value="" disabled>
                              Select a City
                           </option>
                           {places.map((place: any) => (
                              <option
                                 key={place}
                                 value={place}
                                 onClick={() => setCity(place)}
                              >
                                 {place}
                              </option>
                           ))}
                        </select>
                     </div>
                  </div>
               </div>
               {error && (
                  <h1 className="text-[11px] neue-light text-red text-center">
                     {error}
                  </h1>
               )}
               <div className="flex w-full items-center gap-2  py-5 border-t  border-t-lightGrey justify-end px-4 ">
                  <button
                     className="h-[40px] px-6 rounded  text-sm duration-150   text-white  bg-softGreen  hover:ring-[2px] ring-softGreen  ring-offset-1   "
                     onClick={handleSave}
                  >
                     Save
                  </button>
               </div>
            </>
         )}
      </div>
   );
};

export default CustomerAddress;
