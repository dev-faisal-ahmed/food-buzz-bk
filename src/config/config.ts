import dotEnv from 'dotenv';
import path from 'path';

dotEnv.config({ path: path.join(process.cwd(), '.env') });

export const port = process.env.PORT || 5000;
export const mongoUri = process.env.MONGO_URI;
