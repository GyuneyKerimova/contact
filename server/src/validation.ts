import { body } from 'express-validator';

export const validateInput = [
    body('email')
        .exists().withMessage('Email обязателен.')
        .isEmail().withMessage('Неверный формат email.'),
    body('number')
        .optional()
        .isLength({ min: 6, max: 6 }).withMessage('Номер должен содержать 6 цифр.')
        .isNumeric().withMessage('Номер должен содержать только цифры.'),
];