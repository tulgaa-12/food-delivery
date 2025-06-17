import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
export const TokenChecker = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    res.status(401).send({ message: "token not is valid" });
    return;
  }

  const token = authorization.split(" ")[1];
  const TokenPassword = "foodDelivery";

  try {
    const isValid = jwt.verify(token, TokenPassword);

    if (isValid) {
      const destruckToken: any = jwt.decode(token);
      res.locals.userId = destruckToken.userId;
      next();
      return;
    } else {
      res.status(401).send({ message: "token not is valid" });
    }
  } catch (err) {
    res.status(401).send({ message: "token not is valid" });
  }
};
