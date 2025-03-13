import { NextRequest, NextResponse } from 'next/server';
import ProductModel from '~/lib/models/rooms';
import User from '~/lib/models/user';
import connectMongo from '~/lib/mongodb';

export async function DELETE(req: NextRequest) {
   try {
      await connectMongo();
      const { productId, userId, furnitureId, groupId, typeId } =
         await req.json();
      if (!productId) {
         return NextResponse.json(
            { error: 'Product ID is required' },
            { status: 400 }
         );
      }
      const user = await User.findById(userId);
      if (!user) {
         return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

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

      const product = category.products.find(
         (pro: any) => String(pro._id) === productId
      );

      if (!product) {
         return NextResponse.json(
            { error: 'Product  not found' },
            { status: 404 }
         );
      }

      user.wishlist = user.wishlist.filter((id) => id.productId !== productId);

      await user.save();
      return NextResponse.json({
         message: 'Removed from wishlist',
      });
   } catch (error) {
      return NextResponse.json({ error: 'An error occured' }, { status: 500 });
   }
}
