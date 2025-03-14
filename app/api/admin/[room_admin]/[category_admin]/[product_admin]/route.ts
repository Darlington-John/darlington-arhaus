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
      const product_admin = paths[5];

      const adminFurniture = await ProductModel.findById(room_admin);
      if (!adminFurniture) {
         return NextResponse.json(
            { error: `Room category not found for ID: ${room_admin}` },
            { status: 404 }
         );
      }

      const groupData = adminFurniture.menu.categories.find(
         (category: any) => String(category._id) === category_admin
      );

      if (!groupData) {
         return NextResponse.json(
            { error: `Furniture type not found for ID: ${category_admin}` },
            { status: 404 }
         );
      }

      const productData = groupData.products.find(
         (type: any) => String(type._id) === product_admin
      );

      if (!productData) {
         return NextResponse.json(
            { error: `Furniture sub type not found for ID: ${product_admin}` },
            { status: 404 }
         );
      }

      return NextResponse.json({ productData });
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred while fetching the data' },
         { status: 500 }
      );
   }
}
