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

export const FoodController = { AddFood, UpdateFood };
