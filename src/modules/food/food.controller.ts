import { sendSuccessResponse } from '../../utils/helper';
import { TryCatch } from '../../utils/try-catch';
import { FoodService } from './food.service';

const AddFood = TryCatch(async (req, res) => {
  const newFood = await FoodService.AddFoodIntoDB(req.body);

  return sendSuccessResponse(res, {
    message: 'Food Added Successfully',
    statusCode: 200,
    data: newFood,
  });
});

const GetFoods = TryCatch(async (req, res) => {
  const name = req.query.name || '';
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const maxPrice = req.query.maxPrice || 99999;
  const minPrice = req.query.minPrice || 0;
  const category = req.query.category || '';
  const sortBy = req.query.sortBy;

  const result = await FoodService.GetFoodFromDB({
    name: name as string,
    page: Number(page),
    limit: Number(limit),
    maxPrice: Number(maxPrice),
    minPrice: Number(minPrice),
    category: category as string,
    sortBy: sortBy as string,
  });

  return sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Food was successfully retrieved',
    data: result,
  });
});

const UpdateFood = TryCatch(async (req, res) => {
  const id = req.query.id;
  const updatedFood = await FoodService.UpdateFoodFromDB(
    id as string,
    req.body,
  );
  return sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Food Updated Successfully',
    data: updatedFood,
  });
});

const DeleteFood = TryCatch(async (req, res) => {
  const id = req.query.id;
  const deletedStatus = await FoodService.DeleteFoodFormDB(id as string);
  return sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Food deleted Successfully',
    data: deletedStatus,
  });
});

export const FoodController = { AddFood, GetFoods, UpdateFood, DeleteFood };
