/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Request, Response } from 'express';
import { sendErrorResponse } from '../utils/helper';

export const GlobalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = 400;
  let message = 'something went wrong';

  if (err.name === 'ZodError') message = 'Zod Validation Error';

  if (err.name === 'ValidationError') message = err.message;

  if (err.code == 11000) {
    let errPair = '';
    Object.values(err.keyValue).forEach((el) => (errPair += el + ' '));
    message = errPair + 'already exists';
  }

  return sendErrorResponse(res, { error: err, statusCode, message });
};
