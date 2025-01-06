import express from "express";

import userRoute from "./src/module/user/router";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoute);

export default app;
