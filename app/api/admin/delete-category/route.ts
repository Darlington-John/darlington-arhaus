import { NextRequest, NextResponse } from 'next/server';
import ProductModel from '~/lib/models/rooms';
import connectMongo from '~/lib/mongodb';

export async function DELETE(req: NextRequest) {
   try {
      await connectMongo();

      const { categoryId } = await req.json();

      if (!categoryId) {
         return NextResponse.json(
            { error: 'Product ID is required' },
            { status: 400 }
         );
      }

      const updatedProduct = await ProductModel.findByIdAndDelete(categoryId);

      if (!updatedProduct) {
         return NextResponse.json(
            { error: 'Product not found' },
            { status: 404 }
         );
      }

      return NextResponse.json({
         message: 'Product deleted successfully',
         product: updatedProduct,
      });
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred while deleting the product' },
         { status: 500 }
      );
   }
}
