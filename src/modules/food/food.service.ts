import { FoodType } from './food.interface';
import { FoodModel } from './food.model';

const AddFoodIntoDB = async (payload: FoodType) => {
  const newFood = await FoodModel.create(payload);
  return newFood;
};

const UpdateFoodFromDB = async (id: string, payload: FoodType) => {
  const updatedFood = await FoodModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return updatedFood;
};

export const FoodService = { AddFoodIntoDB, UpdateFoodFromDB };
