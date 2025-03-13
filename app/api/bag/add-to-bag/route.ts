import { NextRequest, NextResponse } from 'next/server';
import ProductModel from '~/lib/models/rooms';
import User from '~/lib/models/user';
import connectMongo from '~/lib/mongodb';

export async function POST(req: NextRequest) {
   try {
      await connectMongo();
      const {
         productId,
         userId,
         furnitureId,
         groupId,
         typeId,
         selectedOption,
         quantity,
         stockCount,
      } = await req.json();
      if (!productId) {
         return NextResponse.json(
            { error: 'Product ID is required' },
            { status: 400 }
         );
      }
      if (!selectedOption && !quantity) {
         return NextResponse.json(
            { error: 'Selected Option Required' },
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
      const isBagged = user.bag.includes(productId);

      if (isBagged) {
         user.bag = user.bag.filter((id) => id !== productId);
      } else {
         user.bag.push({
            typeId: typeId,
            groupId: groupId,
            furnitureId: furnitureId,
            productId: productId,
            quantity: quantity,
            selected_option: selectedOption,
            initial_stock_count: stockCount,
         });
      }
      await user.save();
      return NextResponse.json({
         message: isBagged ? 'Removed from bag' : 'Added to bag',
      });
   } catch (error) {
      return NextResponse.json(
         { error: 'Internal server error' },
         { status: 500 }
      );
   }
}
