import { Router } from 'express';
import { HandleValidation } from '../../middleware/handle-validation';
import { CategoryValidation } from './category.validation';
import { CategoryController } from './category.controller';

export const CategoryRouter = Router();

CategoryRouter.post(
  '/',
  HandleValidation(CategoryValidation.AddCategoryValidationSchema),
  CategoryController.AddCategory,
);
