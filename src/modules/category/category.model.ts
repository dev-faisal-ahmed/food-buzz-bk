import { Schema, model } from 'mongoose';
import { CategoryType } from './category.interface';

export const CategorySchema = new Schema<CategoryType>({
  name: { type: String, unique: true },
});

export const CategoryModel = model('category', CategorySchema);
