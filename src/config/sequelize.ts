import "dotenv/config";
import { Sequelize } from "sequelize-typescript";
import {Users} from "../module/user/schema";

const DATABASE_URL = process.env.CONNECT_DB;

if (!DATABASE_URL) {
  throw new Error("DATABASE_URL not found");
}

export const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  models: [Users],
  logging: false, // false disable logging
});



