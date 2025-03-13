import { NextRequest, NextResponse } from 'next/server';
import cloudinary from 'cloudinary';
import connectMongo from '~/lib/mongodb';
import ProductModel from '~/lib/models/rooms';

cloudinary.v2.config({
   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function PATCH(req: NextRequest) {
   try {
      const formData = await req.formData();

      const productId = formData.get('productId');
      const groupId = formData.get('groupId');
      const name = formData.get('name');
      const price = formData.get('price');
      const furnitureId = formData.get('furnitureId');
      const cancelledPrice = formData.get('cancelledPrice');
      const firstImage = formData.get('firstImage');
      const secondImage = formData.get('secondImage');

      // Validate required fields
      if (!productId || !groupId || !name || !price || !furnitureId) {
         return NextResponse.json(
            { error: 'Missing required fields' },
            { status: 400 }
         );
      }

      // Helper function for uploading an image buffer
      const uploadImage = (buffer: Buffer) =>
         new Promise<string>((resolve, reject) => {
            const uploadStream = cloudinary.v2.uploader.upload_stream(
               { folder: 'arhaus_images' },
               (error, result: any) => {
                  if (error)
                     reject(new Error(error.message || 'Upload failed'));
                  else resolve(result.secure_url);
               }
            );
            uploadStream.end(buffer);
         });

      // Handle image uploads if images are provided
      let firstImageUrl: string | null = null;
      let secondImageUrl: string | null = null;

      if (firstImage && typeof firstImage !== 'string') {
         const firstImageBuffer = Buffer.from(await firstImage.arrayBuffer());
         firstImageUrl = await uploadImage(firstImageBuffer);
      }

      if (secondImage && typeof secondImage !== 'string') {
         const secondImageBuffer = Buffer.from(await secondImage.arrayBuffer());
         secondImageUrl = await uploadImage(secondImageBuffer);
      }

      // Connect to MongoDB
      await connectMongo();

      // Fetch the product by furnitureId
      const product = await ProductModel.findById(furnitureId);
      if (!product) {
         return NextResponse.json(
            { error: 'Product not found' },
            { status: 404 }
         );
      }

      // Find the category by groupId
      const category = product.menu.categories.find(
         (cat: any) => String(cat._id) === groupId
      );
      if (!category) {
         return NextResponse.json(
            { error: 'Category not found' },
            { status: 404 }
         );
      }

      // Find the product within the type's products
      const trueProduct = category.products.find(
         (t: any) => String(t._id) === productId
      );
      if (!trueProduct) {
         return NextResponse.json(
            { error: 'Product not found' },
            { status: 404 }
         );
      }

      // Update the product's fields
      trueProduct.name = name as string;
      trueProduct.price = parseFloat(price as string);
      trueProduct.cancelled_price = parseFloat(cancelledPrice as string) || 0;

      if (firstImageUrl || secondImageUrl) {
         trueProduct.views = {
            first_view: firstImageUrl || trueProduct.views?.first_view,
            second_view: secondImageUrl || trueProduct.views?.second_view,
         };
      }

      // Save the updated product
      await product.save();

      return NextResponse.json({
         message: 'Product updated successfully',
         product: {
            name,
            price,
            cancelled_price: cancelledPrice || '',
            views: { first_view: firstImageUrl, second_view: secondImageUrl },
         },
      });
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred while updating the product' },
         { status: 500 }
      );
   }
}
