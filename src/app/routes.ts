import { Router } from 'express';
import { FoodRouter } from '../modules/food/food.router';
import { CategoryRouter } from '../modules/category/category.router';

export const AppRouter = Router();

AppRouter.use('/food', FoodRouter);
AppRouter.use('/category', CategoryRouter);
