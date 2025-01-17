import { Sequelize } from "sequelize-typescript";
import {Users} from "../module/user/schema";

const DATABASE_URL = "postgres://postgres:prueba@localhost:5434/dbPrueba2";

export const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  models: [Users],
  logging: true, // false disable logging
});



