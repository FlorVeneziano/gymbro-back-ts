import {
  createNewRoutine,
  getAllRoutines,
  getRoutineById,
} from "@application/use-cases/routines";
import { CustomRequest } from "@interfaces/Request.interface";
import { Response } from "express";

export const getRoutine = async (req: CustomRequest, res: Response) => {
  try {
    const { routineId } = req.params;

    const routine = await getRoutineById(Number(routineId));

    if (!routine)
      return res.status(404).json({ error: "Rutina no encontrada" });

    res.status(200).json(routine);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la rutina" });
  }
};

export const createRoutine = async (req: CustomRequest, res: Response) => {
  try {
    const { userID } = req.user;

    const { name, description, routine } = req.body;

    const newRoutine = await createNewRoutine({
      userId: userID,
      name,
      description,
      routine,
    });

    res.status(201).json(newRoutine);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la rutina" });
  }
};

export const getRoutines = async (req: CustomRequest, res: Response) => {
  try {
    const { userID } = req.user;

    const routines = await getAllRoutines(userID);
    if (!routines)
      return res.status(404).json({ error: "Rutinas no encontradas" });

    res.status(200).json(routines);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las rutinas" });
  }
};
