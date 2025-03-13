export interface OrdersType {
   _id: string;
   user_id: string;
   user_phone: string;
   total_price: number;
   delivery_fee: number;
   total_paid: number;
   user_additional_phone: string;
   products: {
      typeId: string;
      groupId: string;
      furnitureId: string;
      productId: string;
      quantity: number;
      selected_option: number;
      cancelled_price: number;
      name: string;
      price: number;
      _id: string;
   }[];
   address: string;
   additional_info: string;
   city: string;
   state: string;
   delivery: {
      pick_up: boolean;
      door_delivery: boolean;
      _id: string;
   };
   createdAt: Date;
   updatedAt: Date;
   __v: number;
}
