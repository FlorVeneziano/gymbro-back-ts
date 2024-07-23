import { Response } from "express";
import {
  createNewUser,
  getUserByMongoId,
  updateUserById,
} from "@application/use-cases/users";
import { CustomRequest } from "@interfaces/Request.interface";

export const getUser = async (req: CustomRequest, res: Response) => {
  try {
    const { userID } = req.user;

    const user = await getUserByMongoId(userID);

    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el usuario" });
  }
};

export const createUser = async (req: CustomRequest, res: Response) => {
  try {
    const { userID, email } = req.user;
    const newUser = await createNewUser({ mongoId: userID, email: email });
    
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el usuario", data: error });
  }
};

export const updateUser = async (req: CustomRequest, res: Response) => {
  try {
    const { userID } = req.user;
    const { name, weight } = req.body;

    const updatedUser = await updateUserById({ name, weight }, userID);

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el usuario" });
  }
};
