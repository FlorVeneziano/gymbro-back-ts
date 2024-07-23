import {
  createExercise,
  findExerciseById,
  allExercises,
  deleteExercise,
  updateExercise,
} from "@domain/repositories/exerciseRepository";

export const createNewExercise = async (exercise: {
  name: string;
  description: string;
}) => {
  return await createExercise(exercise);
};

export const getExerciseById = async (exerciseId: number) => {
  return await findExerciseById(exerciseId);
};

export const getAllExercises = async () => {
  return await allExercises();
};

export const removeExercise = async (exerciseId: number) => {
  return await deleteExercise(exerciseId);
};

export const modifyExercise = async (
  exerciseId: number,
  exercise: {
    name: string;
    description: string;
  }
) => {
  return await updateExercise(exerciseId, exercise);
};
