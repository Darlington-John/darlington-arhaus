'use client';
import { useState, useEffect } from 'react';

const OSMGasStations = () => {
   const [gasStations, setGasStations] = useState<any[]>([]);
   const [userLocation, setUserLocation] = useState<{
      lat: number;
      lng: number;
   } | null>(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const getGasStations = async () => {
         if (!navigator.geolocation) {
            setError('Geolocation is not supported.');
            setLoading(false);
            return;
         }

         navigator.permissions.query({ name: 'geolocation' }).then((result) => {
            if (result.state === 'denied') {
               setError(
                  'Location access is blocked. Please enable it in browser settings.'
               );
               setLoading(false);
               return;
            }

            navigator.geolocation.getCurrentPosition(
               async (position) => {
                  const { latitude: lat, longitude: lng } = position.coords;
                  setUserLocation({ lat, lng });

                  try {
                     const res = await fetch(
                        `/api/gas-stations?lat=${lat}&lng=${lng}`
                     );
                     if (!res.ok)
                        throw new Error(
                           `Error fetching gas stations: ${res.statusText}`
                        );

                     const data = await res.json();
                     setGasStations(data);
                  } catch (err: any) {
                     setError(err.message);
                  } finally {
                     setLoading(false);
                  }
               },
               (error) => {
                  if (error.code === 1) {
                     setError(
                        'Location access denied. Enable location in browser settings.'
                     );
                  } else {
                     setError(`Error getting location: ${error.message}`);
                  }
                  setLoading(false);
               }
            );
         });
      };

      getGasStations();
   }, []);

   if (loading) return <div>Loading gas stations...</div>;
   if (error) return <div>Error: {error}</div>;

   return (
      <div>
         <h2>Nearby Gas Stations</h2>
         {gasStations.length > 0 ? (
            <ul>
               {gasStations.map((station) => (
                  <li key={station.id}>
                     {station.name} - {station.vicinity}
                  </li>
               ))}
            </ul>
         ) : (
            <p>No gas stations found.</p>
         )}
      </div>
   );
};

export default OSMGasStations;
