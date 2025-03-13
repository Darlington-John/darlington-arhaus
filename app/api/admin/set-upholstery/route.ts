import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '~/lib/mongodb';
import ProductModel from '~/lib/models/rooms';

export async function POST(req: NextRequest) {
   try {
      const { furnitureId, groupId, productId, upholstery } = await req.json();
      if (!furnitureId || !groupId || !productId || !upholstery) {
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

      if (upholstery === 'Leather') {
         option.leather = true;
         option.fabric = false;
         option.finish = false;
      } else if (upholstery === 'Fabric') {
         option.leather = false;
         option.fabric = true;
         option.finish = false;
      } else if (upholstery === 'Finish') {
         option.leather = false;
         option.fabric = false;
         option.finish = true;
      }

      await furniture.save();

      return NextResponse.json({
         message: 'Option created successfully',
      });
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred while creating the Option' },
         { status: 500 }
      );
   }
}
