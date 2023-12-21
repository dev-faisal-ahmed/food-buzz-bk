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

export const FoodController = { AddFood };
