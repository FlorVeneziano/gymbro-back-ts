import {
  allRoutinesByUser,
  createRoutine,
  findRoutineById,
} from "@domain/repositories/routineRepository";

export const createNewRoutine = async (routine: {
  userId: number;
  name: string;
  description: string;
  routine: Record<number, number>[];
}) => {
  return await createRoutine(routine);
};

export const getRoutineById = async (routineId: number) => {
  return await findRoutineById(routineId);
};

export const getAllRoutines = async (userId: number) => {
  return await allRoutinesByUser(userId);
};
