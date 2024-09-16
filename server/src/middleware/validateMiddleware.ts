import { Request, Response, NextFunction } from 'express';
import { validationResult, ValidationError } from 'express-validator';
import Errors from '../error'; 

const validationMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error: ValidationError) => error.msg);
        return next(Errors.BadRequest('Ошибка валидации', errorMessages));
    }

    next(); 
};

export default validationMiddleware;