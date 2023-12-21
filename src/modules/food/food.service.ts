import { FoodType } from './food.interface';
import { FoodModel } from './food.model';

const AddFoodIntoDB = async (payload: FoodType) => {
  const newFood = await FoodModel.create(payload);
  return newFood;
};

export const FoodService = { AddFoodIntoDB };
