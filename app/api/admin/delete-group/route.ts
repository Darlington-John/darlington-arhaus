import { NextRequest, NextResponse } from 'next/server';
import cloudinary from 'cloudinary';
import connectMongo from '~/lib/mongodb';
import ProductModel from '~/lib/models/rooms';

export async function DELETE(req: NextRequest) {
   try {
      const { categoryId, groupId } = await req.json();
      if (!groupId || !categoryId) {
         return NextResponse.json(
            { error: 'Group ID or Category ID not provided' },
            { status: 400 }
         );
      }

      await connectMongo();

      const updatedProduct = await ProductModel.findOneAndUpdate(
         {
            _id: categoryId,
         },
         {
            $pull: {
               'menu.categories': { _id: groupId },
            },
         },
         { new: true }
      );

      if (!updatedProduct) {
         return NextResponse.json(
            { error: 'Product or Category not found' },
            { status: 404 }
         );
      }

      return NextResponse.json({
         message: 'Category updated successfully',
      });
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred while updating the category' },
         { status: 500 }
      );
   }
}
