import authConfig from '@config/auth';
import { AppError } from '@shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface TokenPayload {
  iat: number;
  exp: number;
  userID: string;
}

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
    const decodedToken = verify(token, authConfig.jwt.secret);

    const { userID } = decodedToken as TokenPayload;

    request.user = {
      id: userID,
    };

    return next();
  } catch (error) {
    throw new AppError('Invalid JWT Token');
  }
}
