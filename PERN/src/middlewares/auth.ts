import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const Auth = async (req: any, res: Response, next: NextFunction) => {
  const token = req.headers["auth"];
  if (!token) {
    res.status(401).json({ error: "you are not authorise" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
