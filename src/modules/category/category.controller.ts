import { sendSuccessResponse } from '../../utils/helper';
import { TryCatch } from '../../utils/try-catch';
import { CategoryService } from './category.service';

const AddCategory = TryCatch(async (req, res) => {
  const newCategory = await CategoryService.AddCategoryIntoDB(req.body);

  return sendSuccessResponse(res, {
    message: 'Category added successfully',
    statusCode: 200,
    data: newCategory,
  });
});

export const CategoryController = { AddCategory };
