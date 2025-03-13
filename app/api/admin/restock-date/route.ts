import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '~/lib/mongodb';
import ProductModel from '~/lib/models/rooms';

export async function PATCH(req: NextRequest) {
   try {
      const { furnitureId, groupId, typeId, productId, optionId, restockDate } =
         await req.json();
      if (!furnitureId || !groupId || !productId || !optionId || !restockDate) {
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

      const selectedOption = option.options.find(
         (opt: any) => String(opt._id) === optionId
      );
      if (!selectedOption) {
         return NextResponse.json(
            { error: 'Selected option not found' },
            { status: 404 }
         );
      }

      selectedOption.stock.when_in_stock = restockDate;
      const updatedProduct = await furniture.save();

      if (!updatedProduct) {
         throw new Error('Failed to add restocking  date');
      }

      return NextResponse.json({
         message: 'Option restocked successfully',
      });
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred while adding restocking date' },
         { status: 500 }
      );
   }
}
