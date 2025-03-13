import { NextResponse } from 'next/server';

export async function GET(req: Request) {
   const { searchParams } = new URL(req.url);
   const lat = searchParams.get('lat');
   const lng = searchParams.get('lng');

   if (!lat || !lng) {
      return NextResponse.json(
         { error: 'Latitude and longitude are required' },
         { status: 400 }
      );
   }

   try {
      // Query OpenStreetMap Overpass API for markets within 15km
      const query = `
         [out:json];
         node["shop"="supermarket"](around:15000,${lat},${lng});
         out;
      `;
      const overpassUrl = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(
         query
      )}`;

      const response = await fetch(overpassUrl);
      if (!response.ok) {
         throw new Error(`OSM API error: ${response.statusText}`);
      }

      const data = await response.json();
      const userLat = parseFloat(lat);
      const userLng = parseFloat(lng);

      const markets = await Promise.all(
         data.elements.map(async (market: any) => {
            let street = market.tags['addr:street'] || null;
            let city = market.tags['addr:city'] || null;

            // If street or city is missing, use Nominatim reverse geocoding
            if (!street || !city) {
               try {
                  const geoRes = await fetch(
                     `https://nominatim.openstreetmap.org/reverse?lat=${market.lat}&lon=${market.lon}&format=json`
                  );

                  const contentType = geoRes.headers.get('content-type');
                  if (
                     !contentType ||
                     !contentType.includes('application/json')
                  ) {
                     throw new Error('Invalid response');
                  }

                  const geoData = await geoRes.json();
                  street = street || geoData.address?.road || 'Unknown Street';
                  city =
                     city ||
                     geoData.address?.city ||
                     geoData.address?.town ||
                     geoData.address?.village ||
                     'Unknown City';
               } catch (error) {
                  console.error('Reverse geocoding failed:', error);
               }
            }

            return {
               id: market.id,
               name: market.tags.name || 'Unnamed market',
               lat: market.lat,
               lng: market.lon,
               street: street || 'Unnamed street',
               city: city || 'Unnamed city',
               distance: Math.sqrt(
                  Math.pow(market.lat - userLat, 2) +
                     Math.pow(market.lon - userLng, 2)
               ), // Simple distance calculation
            };
         })
      );

      // Remove duplicate markets based on name (case insensitive)
      const uniquemarkets = markets.filter(
         (market, index, self) =>
            index ===
            self.findIndex(
               (h) => h.name.toLowerCase() === market.name.toLowerCase()
            )
      );

      // Sort markets by distance (closest first)
      uniquemarkets.sort((a, b) => a.distance - b.distance);

      return NextResponse.json(uniquemarkets);
   } catch (error: any) {
      return NextResponse.json(
         { error: 'Failed to fetch markets' },
         { status: 500 }
      );
   }
}
