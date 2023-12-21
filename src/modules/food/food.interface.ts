import { Schema } from 'mongoose';

export type FoodType = {
  _id: Schema.Types.ObjectId;
  name: string;
  category: Schema.Types.ObjectId;
  price: number;
  soldCount: number;
  image: string;
};
