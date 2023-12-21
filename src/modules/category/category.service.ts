import { CategoryType } from './category.interface';
import { CategoryModel } from './category.model';

const AddCategoryIntoDB = async (payload: CategoryType) => {
  const newCategory = await CategoryModel.create(payload);
  return newCategory;
};

export const CategoryService = { AddCategoryIntoDB };
