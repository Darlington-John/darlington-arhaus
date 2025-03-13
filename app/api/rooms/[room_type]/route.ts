import { NextRequest, NextResponse } from 'next/server';
import ProductModel from '~/lib/models/rooms';
import connectMongo from '~/lib/mongodb';

export async function GET(
   req: NextRequest,
   { params }: { params: { room_type: string } }
) {
   try {
      await connectMongo();

      const { room_type } = await params;

      const product = await ProductModel.findById(room_type);

      if (!product) {
         return NextResponse.json(
            { error: 'Group not found' },
            { status: 404 }
         );
      }

      return NextResponse.json({ group: product });
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred while fetching the group' },
         { status: 500 }
      );
   }
}
