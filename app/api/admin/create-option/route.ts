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

      const furntureId = formData.get('furntureId');
      const groupId = formData.get('groupId');
      const productId = formData.get('productId');
      const optionPreviews: File[] = [];

      for (const key of formData.keys()) {
         if (key.startsWith('optionProductsPreviews')) {
            const file = formData.get(key) as File | null;
            if (file) {
               optionPreviews.push(file);
            }
         }
      }
      const tags: string[] = [];
      for (const key of formData.keys()) {
         if (key.startsWith('tags')) {
            const tag = formData.get(key) as string | null;
            if (tag) {
               tags.push(tag);
            }
         }
      }
      const optionName = formData.get('optionName');
      const care = formData.get('care');
      const feature = formData.get('feature');
      const fabrics = formData.get('fabrics');
      const optionPreview = formData.get('optionPreview');
      const stockCount = formData.get('stockCount');
      const restockDate = formData.get('restockDate');
      const inStock = formData.get('inStock');

      if (
         !furntureId ||
         !groupId ||
         !productId ||
         !optionName ||
         !optionPreview
      ) {
         return NextResponse.json(
            { error: 'Missing required fields' },
            { status: 400 }
         );
      }

      if (!optionPreview || typeof optionPreview === 'string') {
         return NextResponse.json(
            { error: 'The optionPreview image is required and must be a file' },
            { status: 400 }
         );
      }

      if (optionPreviews.length === 0) {
         return NextResponse.json(
            { error: 'At least one optionProductsPreviews file is required' },
            { status: 400 }
         );
      }
      const optionPreviewBuffer = Buffer.from(
         await optionPreview.arrayBuffer()
      );

      const optionPreviewsBuffers = await Promise.all(
         optionPreviews.map(async (file: any) => {
            const arrayBuffer = await file.arrayBuffer();
            return Buffer.from(arrayBuffer);
         })
      );

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

      const optionPreviewUrl = await uploadImage(optionPreviewBuffer);

      const optionPreviewsUrls = await Promise.all(
         optionPreviewsBuffers.map((buffer) => uploadImage(buffer))
      );

      await connectMongo();

      const furniture = await ProductModel.findById(furntureId);
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
            { error: 'Option  not found' },
            { status: 404 }
         );
      }

      option.options.push({
         option: optionName as any,
         stock: {
            in_stock: inStock as any,
            when_in_stock: restockDate || ('' as any),
            stock_count: stockCount || (0 as any),
         },
         option_image: optionPreviewUrl,
         previews: optionPreviewsUrls,
         tags: tags,
         features: feature as any,
         care: care as any,
         fabrics: fabrics as any,
      });

      await furniture.save();

      return NextResponse.json({
         message: 'Option created successfully',
      });
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred while creating the Option' },
         { status: 500 }
      );
   }
}
