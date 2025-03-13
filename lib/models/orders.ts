import mongoose, { Schema, Document, Model } from 'mongoose';

import { v4 as uuidv4 } from 'uuid';
interface IOrder extends Document {
   user_id: string;
   user_phone: string;
   total_price: number;
   delivery_fee: number;
   total_paid: number;
   user_additional_phone?: string;
   address: string;
   additional_info?: string;
   city: string;
   state: string;
   delivery: IDelivery;
   products: IProducts[];
}

interface IProducts {
   groupId: string;
   furnitureId: string;
   productId: string;
   selected_option: number;
   quantity: number;
   cancelled_price: number;
   name: string;
   price: number;
}
interface IDelivery {
   pick_up: boolean;
   door_delivery: boolean;
   pick_up_station_name?: string;
   pick_up_city?: string;
   pick_up_street?: string;
   pick_up_latitude?: number;
   pick_up_longitude?: number;
}

const ProductsSchema: Schema<IProducts> = new mongoose.Schema({
   groupId: { type: String, required: false },
   furnitureId: { type: String, required: false },
   productId: { type: String, required: false },
   quantity: { type: Number, required: false },
   selected_option: { type: Number, required: false },
   cancelled_price: { type: Number, required: false },
   name: { type: String, required: false },
   price: { type: Number, required: false },
});
const DeliverySchema: Schema<IDelivery> = new Schema({
   pick_up: { type: Boolean, required: false },
   door_delivery: { type: Boolean, required: false },
   pick_up_station_name: { type: String, required: false },
   pick_up_city: { type: String, required: false },
   pick_up_street: { type: String, required: false },
   pick_up_latitude: { type: Number, required: false },
   pick_up_longitude: { type: Number, required: false },
});
const orderSchema: Schema<IOrder> = new mongoose.Schema(
   {
      user_id: { type: String, required: false },
      user_phone: { type: String, required: false },
      total_price: { type: Number, required: false },
      delivery_fee: { type: Number, required: false },
      total_paid: { type: Number, required: false },
      user_additional_phone: { type: String, required: false },
      products: [ProductsSchema],
      address: { type: String, required: false },
      additional_info: { type: String, required: false },
      city: { type: String, required: false },
      state: { type: String, required: false },
      delivery: { type: DeliverySchema, required: false },
   },
   { timestamps: true }
);

const Order: Model<IOrder> =
   mongoose.models.Order || mongoose.model<IOrder>('Order', orderSchema);
export default Order;
export type { IOrder };
