import express from "express";

//import userRoute from "./src/module/user/route";


const port = process.env.PORT ?? 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use(pathUser, userRoute);

export default app;
