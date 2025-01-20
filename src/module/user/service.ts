import {Users} from "./schema"

 const createUser = async (
  email: string,
  password: string,
  fullName: string,
  profile: string
) => {  
  const resp = await Users.create({ email, password,fullName,profile }); 
  console.log("🚀 ~ resp:", resp)
   
  return resp;
}; 

const getUseById = async (id: string) => {
    const users = await Users.findByPk(id);
    return users;
};

const getUseByEmail = async (email: string) => {
  const users = await Users.findOne({
    where: {
      email: email // Búsqueda exacta
    }
  });
  return users;
};

const getUsers = async () => {
  const users = await Users.findAll();
  return users;
};

/* const updateUser = async (
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
}; */

const deleteUser = async (id: string) => {
  try {
    const userSelect = await Users.findByPk(id);
    await userSelect?.destroy(); 
    return userSelect; 
    
  } catch (error) {
    
  }
 
};

export const userService = {
  createUser,
  getUseById,
  getUsers,
  getUseByEmail,
  //updateUser,
  deleteUser,
};
