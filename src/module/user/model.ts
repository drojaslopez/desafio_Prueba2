import { User } from "./interfaces";
//import { pool } from "../../database/db";


const findAll = async () => {

  const { rows } = await pool.query("SELECT * FROM USERS");
  return rows as User[];
};

const findOneById = async (id: string) => {
  // Datos parametrizados
  const query = {
    text: `
    SELECT * FROM USERS
    WHERE id = $1
    `,
    values: [id],
  };

  const { rows } = await pool.query(query);

  return rows[0] as User; // ORM
};

const create = async (email: string, password: string, fullName: string, profile: string) => {
  const query = {
    text: `
    INSERT INTO USERS (email, password, fullName, profile)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
    values: [email, password, fullName, profile],
  };

  const { rows } = await pool.query(query);

  return rows[0] as User;
};


const update = async (email: string, password: string, fullName: string, profile: string, id: string) => {
  
  const query = {
    text: `
    UPDATE USERS
    SET email = $1, password = $2, fullName = $3, profile = $4
    WHERE id = $5
    RETURNING *
    `,
    values: [email, password, fullName, profile, id],
  };
  const { rows } = await pool.query(query);
  return rows[0] as User;
};


const remove = async (id: string) => {
  const query = {
    text: `
    DELETE FROM users
    WHERE id = $1
    RETURNING *
    `,
    values: [id],
  };

  const { rows } = await pool.query(query);

  return rows[0] as User;
};

export const UserModel = {
  create,
  findOneById,
  findAll,
  update,
  remove
};

