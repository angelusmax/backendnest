import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const{authrization}=req.headers;
     if (!authrization){
       throw new HttpException('Unauthorized',HttpStatus.UNAUTHORIZED);
     }
     if (authrization!=='xyz123') {
      throw new HttpException('Forbidden',HttpStatus.FORBIDDEN);
      
     }

    next();
  }
}
