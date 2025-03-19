import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import ProductModel from '~/lib/models/rooms';
import { houseHoldMaterials } from '~/app/dummy-data';
const MONGODB_URI = process.env.MONGODB_URI as string;
export async function POST() {
   try {
      if (mongoose.connection.readyState === 0) {
         await mongoose.connect(MONGODB_URI, {
            //@ts-expect-error: cause why not
            useNewUrlParser: true,
            useUnifiedTopology: true,
         });
      }

      await ProductModel.insertMany(houseHoldMaterials);
      return NextResponse.json({ message: 'Database seeded successfully!' });
   } catch (error: any) {
      return NextResponse.json(
         { message: 'Error seeding database', error: error.message },
         { status: 500 }
      );
   }
}
