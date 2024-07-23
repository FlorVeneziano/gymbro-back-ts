import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { CustomRequest } from "../interfaces/Request.interface";

const SECRET_KEY = process.env.SECRET_KEY ?? ""; // Asegúrate de que esta clave coincida con la utilizada en tu servicio de GO

export const authMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Failed to authenticate token" });
    }

    req.user = decoded;

    next();
  });
};
