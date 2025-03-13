import { NextRequest, NextResponse } from 'next/server';
import cloudinary from 'cloudinary';
import connectMongo from '~/lib/mongodb';
import ProductModel from '~/lib/models/rooms';

cloudinary.v2.config({
   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
   try {
      const formData = await req.formData();

      // Extract data from formData
      const productId = formData.get('productId');
      const groupId = formData.get('groupId');
      const typeId = formData.get('typeId');
      const name = formData.get('name');
      const price = formData.get('price');
      const cancelledPrice = formData.get('cancelledPrice');
      const firstImage = formData.get('firstImage');
      const secondImage = formData.get('secondImage');

      // Validate input
      if (!productId || !groupId || !typeId || !name || !price) {
         return NextResponse.json(
            { error: 'Missing required fields' },
            { status: 400 }
         );
      }

      if (
         !firstImage ||
         typeof firstImage === 'string' ||
         !secondImage ||
         typeof secondImage === 'string'
      ) {
         return NextResponse.json(
            { error: 'Images are required and must be files' },
            { status: 400 }
         );
      }

      // Convert image files to buffers
      const firstImageBuffer = Buffer.from(await firstImage.arrayBuffer());
      const secondImageBuffer = Buffer.from(await secondImage.arrayBuffer());

      // Upload images to Cloudinary
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

      const [firstImageUrl, secondImageUrl] = await Promise.all([
         uploadImage(firstImageBuffer),
         uploadImage(secondImageBuffer),
      ]);

      // Connect to MongoDB
      await connectMongo();

      // Fetch the product
      const product = await ProductModel.findById(productId);
      if (!product) {
         return NextResponse.json(
            { error: 'Product not found' },
            { status: 404 }
         );
      }

      // Find the category
      const category: any = product.menu.categories.find(
         (cat: any) => String(cat._id) === groupId
      );
      if (!category) {
         return NextResponse.json(
            { error: 'Category not found' },
            { status: 404 }
         );
      }

      // Access the group

      category.products.push({
         name: name as any,
         price: price as any,
         cancelled_price: (cancelledPrice as any) || 0,
         views: { first_view: firstImageUrl, second_view: secondImageUrl },
         in_stock: true,
         fabric: false,
         leather: false,
      });

      // Save the updated document
      await product.save();

      return NextResponse.json({
         message: 'Product created successfully',
         product: {
            name,
            price,
            cancelled_price: cancelledPrice || '',
            views: { first_view: firstImageUrl, second_view: secondImageUrl },
         },
      });
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred while creating the product' },
         { status: 500 }
      );
   }
}
