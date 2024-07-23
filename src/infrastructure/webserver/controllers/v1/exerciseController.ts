import {
  createNewExercise,
  getExerciseById,
  getAllExercises,
  removeExercise,
  modifyExercise,
} from "@application/use-cases/exercises";

export const createExercise = async (req: any, res: any) => {
  try {
    const exercise = await createNewExercise(req.body);
    res.status(201).json(exercise);
  } catch (error: any) {
    res
      .status(400)
      .json({ message: error.message ?? "Error creating exercise" });
  }
};

export const getExercise = async (req: any, res: any) => {
  try {
    const exercise = await getExerciseById(req.params.id);
    res.status(200).json(exercise);
  } catch (error: any) {
    res
      .status(400)
      .json({ message: error.message ?? "Error getting exercise" });
  }
};

export const getExercises = async (req: any, res: any) => {
  try {
    const exercises = await getAllExercises();
    res.status(200).json(exercises);
  } catch (error: any) {
    res
      .status(400)
      .json({ message: error.message ?? "Error getting exercises" });
  }
};

export const deleteExercise = async (req: any, res: any) => {
  try {
    await removeExercise(req.params.id);
    res.status(204).send();
  } catch (error: any) {
    res
      .status(400)
      .json({ message: error.message ?? "Error deleting exercise" });
  }
};

export const updateExercise = async (req: any, res: any) => {
  try {
    await modifyExercise(req.params.id, req.body);
    res.status(204).send();
  } catch (error: any) {
    res
      .status(400)
      .json({ message: error.message ?? "Error updating exercise" });
  }
};
