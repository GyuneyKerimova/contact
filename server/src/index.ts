// НЕ ТРОГАТЬ

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { validateInput } from "./validation";
import errorMiddleware from "./middleware/errorMiddleware";
import validationMiddleware from "./middleware/validateMiddleware";
import { Emails, Numbers, User } from './types';
import data from "./data.json";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.post('/search', validateInput, validationMiddleware, (req: Request, res: Response, next: NextFunction) => {
    setTimeout(() => {
      try {
        const email: Emails = req.body.email;
        const number: Numbers = req.body.number;

        const results = data.filter((user: User) => {
          return user.email === email && (!number || user.number === number);
        });

        if (results.length > 0) {
          res.json({ message: "Данные получены успешно", data: results });
        } else {
          res.json({ message: "Данные не были найдены" });
        }

      } catch (error) {
        next(error);
      }
    }, 5000);
  }
);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

export default app;