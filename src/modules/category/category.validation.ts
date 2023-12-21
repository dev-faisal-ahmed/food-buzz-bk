import { z } from 'zod';

const AddCategoryValidationSchema = z.object({
  name: z.string({ required_error: 'Name is required' }),
});

export const CategoryValidation = {
  AddCategoryValidationSchema,
};
