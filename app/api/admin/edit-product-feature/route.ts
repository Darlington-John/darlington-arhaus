import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '~/lib/mongodb';
import ProductModel from '~/lib/models/rooms';

export async function POST(req: NextRequest) {
   try {
      const {
         furnitureId,
         groupId,
         productId,
         feature,
         lists,
         content,
         featureId,
      } = await req.json();
      if (!feature) {
         return NextResponse.json(
            { error: 'All fields are required' },
            { status: 400 }
         );
      }
      if (!featureId) {
         return NextResponse.json(
            { error: 'Feature not found' },
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
      const features = option.features.find(
         (fet: any) => String(fet._id) === featureId
      );
      if (!features) {
         return NextResponse.json(
            { error: 'Feature not found' },
            { status: 404 }
         );
      }

      features.header = feature;
      features.lists =
         lists.length > 0 ? lists.map((item: string) => ({ list: item })) : [];
      features.content = content;
      features.paragraph = !!content;

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
