import bcrypt from "bcryptjs";
import {Users} from "./schema"

 const createUser = async (
  email: string,
  password: string,
  fullName: string,
  profile: string
) => {
  const users = await Users.findAll({
    where: {
      email: email // Búsqueda exacta
    }
  });
  if (users) {
    throw new Error("Email already exists");
  } 
  const salt = await bcrypt.genSalt(10);
  const passwordHashed = await bcrypt.hash(password, salt);

  console.log(email, passwordHashed,fullName,profile);
  const resp = await Users.create({ email, passwordHashed,fullName,profile });
  return  resp;
}; 

const getUseById = async (id: string) => {
    const users = await Users.findByPk(id);
    return users;
};

const getUsers = async () => {
  const users = await Users.findAll();
  return users;
};

const updateUser = async (
  id: string,
  email: string,
  password: string,
  fullName: string,
  profile: string
) => {
  const users  = await Users.findByPk(id);
  if (!users) {
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
  await User.update(newUser.email, newUser.password, newUser.fullName, newUser.profile, newUser.id??'');
  return newUser;
};

const deleteUser = async (id: string) => {
  try {
    const userSelect = await Users.findByPk(id);
    await userSelect?.deletedAt; 
    return userSelect; 
    
  } catch (error) {
    
  }
 
};

export const userService = {
  createUser,
  getUseById,
  getUsers,
  //updateUser,
  deleteUser,
};
