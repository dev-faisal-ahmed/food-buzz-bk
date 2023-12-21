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
