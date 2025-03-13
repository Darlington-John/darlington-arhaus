import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '~/lib/mongodb';
import ProductModel from '~/lib/models/rooms';

export async function POST(req: NextRequest) {
   try {
      const { furnitureId, groupId, productId, feature, lists, content } =
         await req.json();
      if (!feature) {
         return NextResponse.json(
            { error: 'All fields are required' },
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

      const option: any = category.products.find(
         (pro: any) => String(pro._id) === productId
      );
      if (!option) {
         return NextResponse.json(
            { error: 'Product not found' },
            { status: 404 }
         );
      }

      option.features.push({
         header: feature,
         paragraph: content ? true : false,
         content: content || '',
         ...(lists.length > 0 && {
            lists: lists.map((item: string) => ({ list: item })),
         }),
      });

      await furniture.save();

      return NextResponse.json({
         message: 'features set',
      });
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred while setting features' },
         { status: 500 }
      );
   }
}
