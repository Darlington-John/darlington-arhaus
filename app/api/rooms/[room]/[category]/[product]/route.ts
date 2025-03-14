import { NextRequest, NextResponse } from 'next/server';
import { Types } from 'mongoose';
import connectMongo from '~/lib/mongodb';
import ProductModel from '~/lib/models/rooms';

export async function GET(req: NextRequest) {
   try {
      await connectMongo();
      const url = new URL(req.url);
      const paths = url.pathname.split('/');
      const room = paths[3];
      const category = paths[4];
      const product = paths[5];
      const roomData = await ProductModel.findById(room);
      if (!roomData) {
         return NextResponse.json(
            { error: `Room category not found for ID: ${room}` },
            { status: 404 }
         );
      }

      // Find the specific furniture category by its _id within menu.categories
      const categoryData = roomData.menu.categories.find(
         (cat: any) => String(cat._id) === category
      );

      if (!categoryData) {
         return NextResponse.json(
            { error: `Furniture type not found for ID: ${category}` },
            { status: 404 }
         );
      }

      const productData = categoryData.products?.find(
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
