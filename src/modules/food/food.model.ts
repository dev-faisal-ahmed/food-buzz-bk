import { Schema, model } from 'mongoose';
import { FoodType } from './food.interface';

const FoodSchema = new Schema<FoodType>({
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
  soldCount: {
    type: Number,
    required: true,
    default: 0,
  },
  image: { type: String, required: true },
});

export const FoodModel = model('food', FoodSchema);
