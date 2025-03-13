import { NextRequest, NextResponse } from 'next/server';
import { Types } from 'mongoose';
import connectMongo from '~/lib/mongodb';
import ProductModel from '~/lib/models/rooms';

export async function GET(
   req: NextRequest,
   { params }: { params: { room_type: string; furniture_type: string } }
) {
   try {
      await connectMongo();

      const { room_type, furniture_type } = await params;

      const roomCategory = await ProductModel.findById(room_type);
      if (!roomCategory) {
         return NextResponse.json(
            { error: `Room category not found for ID: ${room_type}` },
            { status: 404 }
         );
      }

      // Find the specific furniture category by its _id within menu.categories
      const furnitureSubData = roomCategory.menu.categories.find(
         (category: any) => String(category._id) === furniture_type
      );

      if (!furnitureSubData) {
         return NextResponse.json(
            { error: `Furniture type not found for ID: ${furniture_type}` },
            { status: 404 }
         );
      }

      return NextResponse.json({ furnitureSubData });
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred while fetching the data' },
         { status: 500 }
      );
   }
}
