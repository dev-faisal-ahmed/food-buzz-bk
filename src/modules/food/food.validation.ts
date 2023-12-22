import { z } from 'zod';

const AddFoodValidationSchema = z.object({
  name: z.string({ required_error: 'Name is required' }),
  category: z.string({ required_error: 'Category is required' }),
  price: z
    .number({ required_error: 'Price is required' })
    .min(5, { message: 'Price has to be more than 5 tk' }),

  image: z.string({ required_error: 'image is required' }),
});

const UpdateFoodValidationSchema = z.object({
  name: z.string().optional(),
  category: z.string().optional(),
  price: z.number().optional(),
  image: z.string().optional(),
});

export const FoodValidation = {
  AddFoodValidationSchema,
  UpdateFoodValidationSchema,
};
