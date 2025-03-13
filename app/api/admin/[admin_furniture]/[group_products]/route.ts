import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '~/lib/mongodb';
import ProductModel from '~/lib/models/rooms';

export async function GET(req: NextRequest) {
   try {
      await connectMongo();
      const url = new URL(req.url);
      const paths = url.pathname.split('/');
      const admin_furniture = paths[3];
      const group_products = paths[4];

      const roomCategory = await ProductModel.findById(admin_furniture);
      if (!roomCategory) {
         return NextResponse.json(
            { error: `Room category not found for ID: ${admin_furniture}` },
            { status: 404 }
         );
      }

      const groupData = roomCategory.menu.categories.find(
         (category: any) => String(category._id) === group_products
      );

      if (!groupData) {
         return NextResponse.json(
            { error: `Furniture type not found for ID: ${group_products}` },
            { status: 404 }
         );
      }

      return NextResponse.json({ groupData });
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred while fetching the data' },
         { status: 500 }
      );
   }
}
