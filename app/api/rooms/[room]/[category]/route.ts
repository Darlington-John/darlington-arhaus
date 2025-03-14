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
      const roomData = await ProductModel.findById(room);
      if (!roomData) {
         return NextResponse.json(
            { error: `Room not found for ID: ${room}` },
            { status: 404 }
         );
      }

      const categoryData = roomData.menu.categories.find(
         (cat) => cat._id === category
      );

      if (!categoryData) {
         return NextResponse.json(
            { error: `Category not found for ${category}` },
            { status: 404 }
         );
      }

      return NextResponse.json({ categoryData });
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred while fetching the data' },
         { status: 500 }
      );
   }
}
