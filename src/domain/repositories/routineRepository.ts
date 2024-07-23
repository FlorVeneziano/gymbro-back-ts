import Routine from "@infrastructure/database/models/RoutineModel";

export const allRoutinesByUser = async (userId: number) => {
  return await Routine.findAll({ where: { userId } });
};

export const createRoutine = async (routine: {
  userId: number;
  name: string;
  description: string;
  routine: Record<number, number>[];
}) => {
  return await Routine.create(routine);
};

export const findRoutineById = async (routineId: number) => {
  return await Routine.findByPk(routineId);
};
