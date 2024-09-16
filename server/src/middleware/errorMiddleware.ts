import { Request, Response, NextFunction } from "express";
import Errors from "../error";

const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Errors) {
      const { status, message, errors } = err; 
  
      return res.status(status).json({ message, ...(errors && { errors })});
    }
  
    return res.status(500).json({ message: "Непредвиденная ошибка!" });
  };

export default errorMiddleware;
  