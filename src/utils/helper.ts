import { Response } from 'express';
import { ErrorResponseType, SuccessResponseType } from './types';

export const sendSuccessResponse = (
  res: Response,
  successData: SuccessResponseType,
) => {
  const { data, message, statusCode } = successData;
  return res.status(statusCode).json({ success: true, message, data });
};

export const sendErrorResponse = (
  res: Response,
  errorData: ErrorResponseType,
) => {
  const { error, message, statusCode } = errorData;
  return res.status(statusCode).json({ success: false, message, error });
};
