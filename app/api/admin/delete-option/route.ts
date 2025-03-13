import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '~/lib/mongodb';
import ProductModel from '~/lib/models/rooms';

export async function DELETE(req: NextRequest) {
   try {
      const { furnitureId, groupId, productId, optionId } = await req.json();
      if (!furnitureId || !groupId || !productId || !optionId) {
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
            { error: 'Option  not found' },
            { status: 404 }
         );
      }

      option.options = option.options.filter(
         (opt: any) => opt._id.toString() !== optionId
      );

      const deletedProduct = await furniture.save();

      if (!deletedProduct) {
         throw new Error('Failed to delete the option');
      }

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
