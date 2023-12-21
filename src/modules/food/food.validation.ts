import { z } from 'zod';

export const AddFoodValidationSchema = z.object({
  name: z.string({ required_error: 'Name is required' }),
  category: z.string({ required_error: 'Category is required' }),
  price: z
    .number({ required_error: 'Price is required' })
    .min(5, { message: 'Price has to be more than 5 tk' }),

  image: z.string({ required_error: 'image is required' }),
});

export const FoodValidation = {
  AddFoodValidationSchema,
};
