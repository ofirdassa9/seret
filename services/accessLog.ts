import { Request, Response } from "aleph/types";

export const accessLogMiddleware = (req: Request, res: Response, next: Function) => {
  console.log(`Method: ${req.method}, URL: ${req.url}, Status: ${res.status}`);
  next();
};
