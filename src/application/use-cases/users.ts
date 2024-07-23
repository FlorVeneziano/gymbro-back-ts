import {
  createUserInDb,
  findUserByMongoId,
  updateUser,
} from "@domain/repositories/userRepository";

export const createNewUser = async (user: {
  mongoId: string;
  email: string;
}) => {
  return await createUserInDb(user);
};

export const getUserByMongoId = async (mongoId: string) => {
  return await findUserByMongoId(mongoId);
};

export const updateUserById = async (
  user: { name: string; weight: string },
  mongoId: string
) => {
  return await updateUser(user, mongoId);
};
