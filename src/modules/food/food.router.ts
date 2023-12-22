import { Router } from 'express';
import { FoodController } from './food.controller';
import { HandleValidation } from '../../middleware/handle-validation';
import { FoodValidation } from './food.validation';

export const FoodRouter = Router();

FoodRouter.post(
  '/',
  HandleValidation(FoodValidation.AddFoodValidationSchema),
  FoodController.AddFood,
);

FoodRouter.patch(
  '/',
  HandleValidation(FoodValidation.UpdateFoodValidationSchema),
  FoodController.UpdateFood,
);

FoodRouter.delete('/', FoodController.DeleteFood);

FoodRouter.get('/', FoodController.GetFoods);
