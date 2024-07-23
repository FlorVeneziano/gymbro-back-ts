import Exercise from "@infrastructure/database/models/ExerciseModel";

export const createExercise = async (exercise: {
  name: string;
  description: string;
}) => {
  return await Exercise.create(exercise);
};

export const findExerciseById = async (exerciseId: number) => {
  return await Exercise.findByPk(exerciseId);
};

export const allExercises = async () => {
  return await Exercise.findAll();
};

export const deleteExercise = async (exerciseId: number) => {
  return await Exercise.destroy({ where: { id: exerciseId } });
};

export const updateExercise = async (
  exerciseId: number,
  exercise: {
    name: string;
    description: string;
  }
) => {
  return await Exercise.update(exercise, { where: { id: exerciseId } });
};
