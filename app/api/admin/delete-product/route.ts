import { NextRequest, NextResponse } from 'next/server';
import cloudinary from 'cloudinary';
import connectMongo from '~/lib/mongodb';
import ProductModel from '~/lib/models/rooms';

export async function DELETE(req: NextRequest) {
   try {
      const formData = await req.formData();
      const productId = formData.get('productId');
      const groupId = formData.get('groupId');
      const furnitureId = formData.get('furnitureId');

      if (!productId || !groupId || !furnitureId) {
         return NextResponse.json(
            { error: 'Missing required fields' },
            { status: 400 }
         );
      }
      await connectMongo();

      const product = await ProductModel.findById(furnitureId);
      if (!product) {
         return NextResponse.json(
            { error: 'Product not found' },
            { status: 404 }
         );
      }

      const category = product.menu.categories.find(
         (cat: any) => String(cat._id) === groupId
      );
      if (!category) {
         return NextResponse.json(
            { error: 'Category not found' },
            { status: 404 }
         );
      }

      const filteredProducts = category.products.filter(
         (t: any) => String(t._id) !== productId
      );

      if (filteredProducts.length === category.products.length) {
         return NextResponse.json(
            { error: 'Product not found' },
            { status: 404 }
         );
      }

      category.products = filteredProducts;

      await product.save();

      return NextResponse.json({
         message: 'Product deleted successfully',
      });
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred while deleting the product' },
         { status: 500 }
      );
   }
}
