/* eslint-disable @typescript-eslint/no-explicit-any */
export class AppError extends Error {
  statusCode: number;
  message: string;
  error: any;
  constructor(statusCode: number, message: string, error: any) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.error = error;
  }
}
