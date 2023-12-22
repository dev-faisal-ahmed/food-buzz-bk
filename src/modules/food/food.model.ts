import { Schema, model } from 'mongoose';
import { FoodType } from './food.interface';

const FoodSchema = new Schema<FoodType>(
  {
    name: { type: String, required: true },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'category',
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: { type: String, required: true },
  },
  { timestamps: true },
);

export const FoodModel = model('food', FoodSchema);
