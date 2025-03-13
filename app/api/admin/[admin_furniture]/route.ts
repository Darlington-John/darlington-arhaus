import { NextRequest, NextResponse } from 'next/server';
import ProductModel from '~/lib/models/rooms';
import connectMongo from '~/lib/mongodb';

export async function GET(req: NextRequest) {
   try {
      await connectMongo();
      const url = new URL(req.url);
      const paths = url.pathname.split('/');
      const admin_furniture = paths[3];

      const product = await ProductModel.findById(admin_furniture);

      if (!product) {
         return NextResponse.json(
            { error: 'Group not found' },
            { status: 404 }
         );
      }
      return NextResponse.json({ adminFurniture: product });
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred while fetching the group' },
         { status: 500 }
      );
   }
}
