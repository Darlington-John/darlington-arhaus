import { NextRequest, NextResponse } from 'next/server';
import ProductModel from '~/lib/models/rooms';
import connectMongo from '~/lib/mongodb';

export async function GET(
   req: NextRequest,
   { params }: { params: { admin_furniture: string } }
) {
   try {
      await connectMongo();

      const { admin_furniture } = await params;

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
