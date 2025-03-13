import { NextRequest, NextResponse } from 'next/server';
import { Types } from 'mongoose';
import connectMongo from '~/lib/mongodb';
import ProductModel from '~/lib/models/rooms';

export async function GET(req: NextRequest) {
   try {
      await connectMongo();
      const url = new URL(req.url);
      const paths = url.pathname.split('/');
      const room_type = paths[3];
      const furniture_type = paths[4];
      const product = paths[5];
      const roomCategory = await ProductModel.findById(room_type);
      if (!roomCategory) {
         return NextResponse.json(
            { error: `Room category not found for ID: ${room_type}` },
            { status: 404 }
         );
      }

      // Find the specific furniture category by its _id within menu.categories
      const furnitureData = roomCategory.menu.categories.find(
         (category: any) => String(category._id) === furniture_type
      );

      if (!furnitureData) {
         return NextResponse.json(
            { error: `Furniture type not found for ID: ${furniture_type}` },
            { status: 404 }
         );
      }

      const productData = furnitureData.products?.find(
         (productItem: any) => String(productItem._id) === product
      );

      if (!productData) {
         return NextResponse.json(
            { error: `Product not found for ID: ${product}` },
            { status: 404 }
         );
      }

      // Return the sub-type data
      return NextResponse.json({ productData });
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred while fetching the data' },
         { status: 500 }
      );
   }
}
