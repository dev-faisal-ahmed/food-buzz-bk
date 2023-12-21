import { Schema } from 'mongoose';

export type CategoryType = {
  _id: Schema.Types.ObjectId;
  name: string;
};
