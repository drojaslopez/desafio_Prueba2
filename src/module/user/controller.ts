import { Request, Response } from "express";
import { userService } from "../user/service";

const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.getUseById(id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.json(user);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    console.log("Entre")
    const user = await userService.getUsers();    
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.json(user);
    } 
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password, fullName, profile } = req.body;
    console.log(req.body)

    const user = await userService.createUser(
      email,
      password,
      fullName,
      profile
    );
    if (!user) {
      res.status(20).json({ message: "User not found" });
    } else {
      res.status(201).json(user);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/* const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { email, password, fullName, profile } = req.body;
    const user = await userService.updateUser( id,email,password,fullName, profile );
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.json(user);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  } 
}; */

const deleteUser = async (req: Request, res: Response) => {
   try {
    const { id } = req.params;
    const user = await userService.deleteUser(id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.json(user);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const userController = {
  getUser,
  getUsers,
  createUser,/*
  updateUser, */
  deleteUser,
};