import bcrypt from "bcryptjs";
import { UserModel } from "./model";
import { User } from "./interfaces";

const createUser = async (
  email: string,
  password: string,
  fullName: string,
  profile: string
) => {
  const users = await getUsers();
  const user = users.find((item) => item.email === email);
  if (user) {
    throw new Error("Email already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const passwordHashed = await bcrypt.hash(password, salt);
  const newUser: User = {
    email: email,
    password: passwordHashed,
    fullName: fullName,
    profile: profile,
  };

  await UserModel.create(newUser.email, newUser.password, newUser.fullName, newUser.profile);
  return newUser;
};

const getUseById = async (id: string) => {
    const users = await UserModel.findOneById(id);
    return users;
};

const getUsers = async () => {
  const users = await UserModel.findAll();
  return users;
};

const updateUser = async (
  id: string,
  email: string,
  password: string,
  fullName: string,
  profile: string
) => {
  const users = await getUsers();
  const user = users.find((item) => item.id === id);
  if (!user) {
    throw new Error("User does not exists");
  }
  const salt = await bcrypt.genSalt(10);
  const passwordHashed = await bcrypt.hash(password, salt);

  const newUser: User = {
    id: id,
    email: email,
    password: passwordHashed,
    fullName: fullName,
    profile: profile,
  };
  await UserModel.update(newUser.email, newUser.password, newUser.fullName, newUser.profile, newUser.id??'');
  return newUser;
};

const deleteUser = async (id: string) => {
   const users = await UserModel.findAll();
  const user = users.find((user) => user.id === id);
  if (!user) {
    throw new Error("user does not exist");
  }
  await UserModel.remove(id);
  return user; 
};

export const userService = {
  createUser,
  getUseById,
  getUsers,
  updateUser,
  deleteUser,
};
