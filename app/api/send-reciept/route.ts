import connectMongo from '~/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';
import User from '~/lib/models/user';
import Order from '~/lib/models/orders';
import { mailOptions, transporter } from '~/lib/nodemailer';
import ProductModel from '~/lib/models/rooms';
export async function POST(req: NextRequest) {
   try {
      await connectMongo();
      const {
         userId,
         userPhone,
         userAddPhone,
         products,
         address,
         city,
         state,
         addInfo,
         delivery,
         totalPaid,
         deliveryFee,
         totalPrice,
         selectedStation,
      } = await req.json();
      console.log('selected', selectedStation);
      const user = await User.findById(userId);
      if (!user) {
         return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      if (
         !userPhone ||
         !products ||
         !address ||
         !city ||
         !state ||
         !delivery ||
         !totalPaid ||
         !totalPrice ||
         !deliveryFee
      ) {
         return NextResponse.json(
            { error: 'Missing required fields' },
            { status: 400 }
         );
      }

      if (delivery === 'pick-up' && !selectedStation) {
         return NextResponse.json(
            { error: 'Pickup station not set' },
            { status: 400 }
         );
      }
      const cleanedProducts = products.map(({ _id, ...rest }: any) => rest);
      for (const product of cleanedProducts) {
         const furniture: any = await ProductModel.findById(
            product.furnitureId
         );
         const category = furniture.menu.categories.find(
            (cat: any) => String(cat._id) === product.groupId
         );

         const option = category.products.find(
            (pro: any) => String(pro._id) === product.productId
         );
         const selectedOption = option.options[product.selected_option];

         selectedOption.stock.stock_count -= product.quantity;
         if (selectedOption.stock.stock_count <= 0) {
            selectedOption.stock.stock_count = 0;
            selectedOption.stock.in_stock = false;
         }
         await furniture.save(); // Save only after all checks pass
      }

      const newOrder: any = await Order.create({
         user_id: userId,
         user_phone: userPhone.trim(),
         user_additional_phone: userAddPhone?.trim() || '',
         products: cleanedProducts,
         total_paid: totalPaid,
         total_price: totalPrice,
         delivery_fee: deliveryFee,
         address: address.trim(),
         additional_info: addInfo?.trim() || '',
         city: city.trim(),
         state: state.trim(),
         delivery: {
            pick_up: delivery === 'pick-up',
            door_delivery: delivery === 'door-delivery',
            pick_up_latitude: selectedStation?.lat,
            pick_up_longitude: selectedStation?.lng,
            pick_up_station_name: selectedStation?.name,
            pick_up_street: selectedStation?.street,
            pick_up_city: selectedStation?.city,
         },
      });

      const mappedItems = products
         .map(
            (data: any, index: number) => `
          <tr style="background-color: #ffffff; border-bottom: 1px solid #2D867D;" key="${index}">
            <td style="font-size: 12px; padding: 5px; word-break: break-word; max-width: 180px;">
              ${data.name}
            </td>
            <td style="font-size: 12px; padding: 5px; text-align: center;">
              ${data.quantity}
            </td>
            <td style="font-size: 12px; padding: 5px; text-align: center;">
              ₦ ${
                 data?.price && data.quantity !== undefined
                    ? (data.price * data.quantity).toLocaleString('en-US')
                    : 'N/A'
              }
            </td>
          </tr>`
         )
         .join('');
      await transporter.sendMail({
         ...mailOptions,
         to: user?.email,
         subject: 'Order Reciept',
         html: `<table width="400" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; padding: 20px; border-radius: 8px;">
  <tr>
     <td align="left">
        <h1 style="color: #2D867D; font-size: 16px; font-weight: bold; text-transform: uppercase; margin: 0;">Order Receipt</h1>
     </td>
     <td align="right">
        <img src="https://res.cloudinary.com/dycw73vuy/image/upload/v1734889176/arhaus_s6v9ro.png" width="80" />
        <p style="font-size: 12px; color: #707070; margin: 2px 0;">contact@arhaus.com</p>
        <p style="font-size: 12px; color: #707070; margin: 2px 0;">darlington-arhaus.vercel.app</p>
     </td>
  </tr>
</table>

<table width="400" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; padding: 20px; border-radius: 8px;">
  <tr>
     <td colspan="2">
        <p style="font-size: 14px; font-weight: bold;">Order ${newOrder._id}</p>
        <p style="font-size: 14px; font-weight: bold;">Dear ${
           user?.firstName
        },</p>
        <p style="font-size: 12px; color: #707070;">We are writing to inform you that the order placed on ${
           newOrder?.createdAt
        } has been confirmed.</p>
     </td>
  </tr>
</table>

<table width="400" border="0" cellspacing="0" cellpadding="10" style="border-collapse: collapse; border-top: 2px solid #2D867D; border-bottom: 2px solid #2D867D; margin-top: 10px;">
  <tr>
     <td width="50%" valign="top">
        <h3 style="color: #2D867D; font-size: 14px; margin-bottom: 5px;">SHIPPING ADDRESS</h3>
        <p style="font-size: 12px; color: #707070; margin: 2px 0;">${
           delivery === 'pick-up' ? `${selectedStation.name}` : `${address}`
        } </p>
        <p style="font-size: 12px; color: #707070; margin: 2px 0;">${
           delivery === 'pick-up' ? `${selectedStation.street}` : `${city}`
        }, ${
            delivery === 'pick-up' ? `${selectedStation.city}` : `${state}`
         }</p>
        <p style="font-size: 12px; color: #707070; margin: 2px 0;">${userPhone}${
            userAddPhone && `, ${userAddPhone}`
         }</p>
     </td>
     <td width="50%" valign="top">
 
        <p style="font-size: 12px; color: #707070; margin: 2px 0;">${
           user?.email
        }</p>
        <p style="font-size: 12px; color: #707070; margin: 2px 0;">${
           user?.firstName
        } ${user?.lastName}</p>
     </td>
  </tr>
</table>

<table width="400" border="0" cellspacing="0" cellpadding="5" style="border-collapse: collapse; margin-top: 10px;">
  <tr>
     <td colspan="3">
        <h3 style="color: #2D867D; font-size: 14px; margin-bottom: 5px;">SUMMARY</h3>
     </td>
  </tr>
  <tr style="background-color: #2D867D; color: white; text-align: center;">
     <th width="60%" style="font-size: 12px; padding: 5px;">Product</th>
     <th width="20%" style="font-size: 12px; padding: 5px;">Quantity</th>
     <th width="20%" style="font-size: 12px; padding: 5px;">Price</th>
  </tr>
  ${mappedItems}
</table>

<table width="400" border="0" cellspacing="0" cellpadding="5" style="margin-top: 10px;">
  <tr>
     <td align="right" style="font-size: 13px;">
        <p><strong>Sub-total:</strong> ₦${totalPrice.toLocaleString(
           'en-US'
        )}</p>
        <p><strong>Delivery fee:</strong> ₦${deliveryFee.toLocaleString(
           'en-US'
        )}</p>
        <p><strong>Paid:</strong> ₦${totalPaid.toLocaleString('en-US')}</p>
     </td>
  </tr>

</table>
<table width="400" border="0" cellspacing="0" cellpadding="5" style="margin-top: 10px;">
  <tr>
     <td align="center" style="font-size: 13px;">
      <p style="text-align: center; font-size: 12px; color: #707070;" width="400" >©Arhaus, 2025</p>
     </td>
  </tr>

</table>`,
      });
      user.bag = [];
      await user.save();
      return NextResponse.json({
         message: 'Order created successfully and reciept sent',
      });
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred during reciept creation' },
         { status: 500 }
      );
   }
}
