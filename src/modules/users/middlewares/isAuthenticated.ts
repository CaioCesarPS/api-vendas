import authConfig from '@config/auth';
import { AppError } from '@shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export default function isAutenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT Token is missing');
  }

  const [, token] = authHeader.split(' ');
  try {
    const decoedToken = verify(token, authConfig.jwt.secret);

    return next();
  } catch (error) {
    throw new AppError('Invalid JWT Token');
  }
}
