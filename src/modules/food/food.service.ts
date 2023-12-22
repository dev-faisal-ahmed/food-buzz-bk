import { GetFoodFromDBPayloadType } from '../../utils/types';
import { FoodType } from './food.interface';
import { FoodModel } from './food.model';

const AddFoodIntoDB = async (payload: FoodType) => {
  const newFood = await FoodModel.create(payload);
  return newFood;
};

const GetFoodFromDB = async (payload: GetFoodFromDBPayloadType) => {
  const { name, page, limit, maxPrice, minPrice, category } = payload;

  const result = await FoodModel.aggregate([
    {
      $lookup: {
        from: 'categories',
        localField: 'category',
        foreignField: '_id',
        as: 'category',
      },
    },
    {
      $match: {
        name: { $regex: name, $options: 'i' },
        price: { $gte: minPrice, $lte: maxPrice },
        category: { $elemMatch: { name: { $regex: category, $options: 'i' } } },
      },
    },
    {
      $project: {
        name: 1,
        price: 1,
        image: 1,
        category: '$category.name',
      },
    },
  ])
    .skip((page - 1) * limit)
    .limit(limit);

  return result;
};

const UpdateFoodFromDB = async (id: string, payload: FoodType) => {
  const updatedFood = await FoodModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return updatedFood;
};

const DeleteFoodFormDB = async (id: string) => {
  const deletedStatus = await FoodModel.findByIdAndDelete(id);
  return deletedStatus;
};

export const FoodService = {
  AddFoodIntoDB,
  GetFoodFromDB,
  UpdateFoodFromDB,
  DeleteFoodFormDB,
};
