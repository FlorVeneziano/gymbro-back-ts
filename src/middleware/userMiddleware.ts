import { findUserByMongoId } from "@domain/repositories/userRepository";
import { CustomRequest } from "@interfaces/Request.interface";
import { Response, NextFunction } from "express";

export const userMiddleware = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const { userID } = req.user; // Assuming you have the userID in the request object

  try {
    const user: any = await findUserByMongoId(userID);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user.userID = user.id;

    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
