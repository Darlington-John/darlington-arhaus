import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '~/lib/mongodb';
import ProductModel from '~/lib/models/rooms';

export async function PATCH(req: NextRequest) {
   try {
      const { furnitureId, groupId, productId, name, cancelledPrice, price } =
         await req.json();
      if (
         !furnitureId ||
         !groupId ||
         !productId ||
         !name ||
         !cancelledPrice ||
         !price
      ) {
         return NextResponse.json(
            { error: 'Missing required fields' },
            { status: 400 }
         );
      }

      await connectMongo();
      const furniture = await ProductModel.findById(furnitureId);
      if (!furniture) {
         return NextResponse.json(
            { error: 'Product not found' },
            { status: 404 }
         );
      }

      const category = furniture.menu.categories.find(
         (cat: any) => String(cat._id) === groupId
      );
      if (!category) {
         return NextResponse.json(
            { error: 'Category not found' },
            { status: 404 }
         );
      }

      const option = category.products.find(
         (pro: any) => String(pro._id) === productId
      );
      if (!option) {
         return NextResponse.json(
            { error: 'Product not found' },
            { status: 404 }
         );
      }

      option.name = name;
      option.price = price;
      option.cancelled_price = cancelledPrice;

      await furniture.save();

      return NextResponse.json({
         message: 'Product edited',
      });
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred while editing the Product' },
         { status: 500 }
      );
   }
}
