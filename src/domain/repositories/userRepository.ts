import User from "@infrastructure/database/models/UserModel";

export const findAllUsers = async () => {
  return await User.findAll();
};

export const createUser = async (user: { name: string }) => {
  return await User.create(user);
};

export const createUserInDb = async (user: {
  mongoId: string;
  email: string;
}) => {
  return await User.create(user);
};

export const findUserByMongoId = async (mongoId: string) => {
  return await User.findOne({ where: { mongoId } });
};

export const updateUser = async (
  user: { name: string; weight: string },
  mongoId: string
) => {
  return await User.update(user, { where: { mongoId } });
};
