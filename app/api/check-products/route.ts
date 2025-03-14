import connectMongo from '~/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';
import User from '~/lib/models/user';
import ProductModel from '~/lib/models/rooms';

export async function POST(req: NextRequest) {
   try {
      await connectMongo();
      const { userId, products } = await req.json();
      const user = await User.findById(userId);
      if (!user) {
         return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      if (!products || !Array.isArray(products) || products.length === 0) {
         return NextResponse.json(
            { error: 'No products provided' },
            { status: 400 }
         );
      }

      // Remove `_id` from all products (since it's redundant)
      const cleanedProducts = products.map(({ _id, ...rest }) => rest);

      const insufficientProducts: { name: string; availableStock: number }[] =
         [];

      for (const product of cleanedProducts) {
         const furniture = await ProductModel.findById(product.furnitureId);
         if (!furniture) {
            return NextResponse.json(
               { error: 'Furniture not found' },
               { status: 404 }
            );
         }

         const category = furniture.menu.categories.find(
            (cat: any) => String(cat._id) === product.groupId
         );
         if (!category) {
            return NextResponse.json(
               { error: 'Category not found' },
               { status: 404 }
            );
         }

         const option = category.products.find(
            (pro: any) => String(pro._id) === product.productId
         );
         if (!option) {
            return NextResponse.json(
               { error: 'Option not found' },
               { status: 404 }
            );
         }

         const selectedOption = option.options[product.selected_option];
         if (!selectedOption) {
            return NextResponse.json(
               { error: 'Selected option not found' },
               { status: 404 }
            );
         }

         // Check stock availability
         if (selectedOption.stock.stock_count < product.quantity) {
            insufficientProducts.push({
               name: option.name, // Assuming 'name' exists in option
               availableStock: selectedOption.stock.stock_count,
            });
            return NextResponse.json(
               {
                  error: insufficientProducts,
               },
               { status: 400 }
            );
         }
      }

      if (insufficientProducts.length > 0) {
         return NextResponse.json(
            {
               error: insufficientProducts,
            },
            { status: 400 }
         );
      }
      return NextResponse.json({
         message: 'Check successful',
      });
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred during product check' },
         { status: 500 }
      );
   }
}
