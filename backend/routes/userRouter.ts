import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  registerNewUser,
  updateUser,
  userLogin,
} from "../controllers/UserController";

const userRouter = express.Router();

// Route for registering a new user
userRouter.post("/register", registerNewUser);
userRouter.get("/login", userLogin);

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
