import { NextRequest, NextResponse } from 'next/server';
import { Types } from 'mongoose';
import connectMongo from '~/lib/mongodb';
import ProductModel from '~/lib/models/rooms';
import { console } from 'inspector';

export async function GET(
   req: NextRequest,
   { params }: { params: { admin_furniture: string; group_products: string } }
) {
   try {
      await connectMongo();

      const { admin_furniture, group_products } = await params;

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
