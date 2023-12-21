/* eslint-disable @typescript-eslint/no-explicit-any */

export type SuccessResponseType = {
  statusCode: number;
  message: string;
  data: any;
};

export type ErrorResponseType = {
  statusCode: number;
  message: string;
  error: any;
};
