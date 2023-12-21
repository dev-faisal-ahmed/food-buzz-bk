import express from 'express';
import cors from 'cors';
import { AppRouter } from './routes';
import { GlobalErrorHandler } from '../middleware/global-error-handler';

export const app = express();

// parser
app.use(express.json());
app.use(cors());

app.use('/api/v1', AppRouter);
app.get('/', (req, res) => {
  res.json('Sever is running');
});

app.use(GlobalErrorHandler);
