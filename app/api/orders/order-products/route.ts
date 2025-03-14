import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '~/lib/mongodb';
import ProductModel from '~/lib/models/rooms';

export async function GET(req: NextRequest) {
   try {
      await connectMongo();

      const searchParams = req.nextUrl.searchParams;
      const furnitureId = searchParams.get('furnitureId');
      const groupId = searchParams.get('groupId');
      const productId = searchParams.get('productId');

      if (!furnitureId || !groupId || !productId) {
         return NextResponse.json(
            { error: 'Missing parameters' },
            { status: 400 }
         );
      }

      const adminFurniture = await ProductModel.findById(furnitureId);
      if (!adminFurniture) {
         return NextResponse.json(
            { error: `Room category not found for ID: ${furnitureId}` },
            { status: 404 }
         );
      }

      const groupData = adminFurniture.menu.categories.find(
         (category: any) => String(category._id) === groupId
      );

      if (!groupData) {
         return NextResponse.json(
            { error: `Furniture type not found for ID: ${groupId}` },
            { status: 404 }
         );
      }

      const productData = groupData.products.find(
         (type: any) => String(type._id) === productId
      );

      if (!productData) {
         return NextResponse.json(
            { error: `Furniture sub type not found for ID: ${productId}` },
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
