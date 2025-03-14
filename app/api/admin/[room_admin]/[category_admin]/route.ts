import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '~/lib/mongodb';
import ProductModel from '~/lib/models/rooms';

export async function GET(req: NextRequest) {
   try {
      await connectMongo();
      const url = new URL(req.url);
      const paths = url.pathname.split('/');
      const room_admin = paths[3];
      const category_admin = paths[4];

      const roomData = await ProductModel.findById(room_admin);
      if (!roomData) {
         return NextResponse.json(
            { error: `Room category not found for ID: ${room_admin}` },
            { status: 404 }
         );
      }

      const categoryData = roomData.menu.categories.find(
         (category: any) => String(category._id) === category_admin
      );

      if (!categoryData) {
         return NextResponse.json(
            { error: `Furniture type not found for ID: ${category_admin}` },
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
