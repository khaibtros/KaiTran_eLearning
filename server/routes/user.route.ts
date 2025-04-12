import express from "express";
import {
  registrationUser,
  activateUser,
  loginUser,
  logoutUser,
  getUserInfo,
  socialAuth,
  updateProfilePicture,
  updateUserInfo,
  updatePassword,
  getAllUsers
} from "../controllers/user.controller";
import { authorizeRoles, isAutheticated } from "../middleware/auth";

const userRouter = express.Router();

userRouter.post("/registration", registrationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", isAutheticated, logoutUser);
userRouter.get("/me", isAutheticated, getUserInfo);
userRouter.post("/social-auth", socialAuth);
userRouter.put("/update-user-info",isAutheticated, updateUserInfo);
userRouter.put("/update-user-password", isAutheticated, updatePassword);
userRouter.put("/update-user-avatar", isAutheticated, updateProfilePicture);

userRouter.get(
  "/get-users",
  isAutheticated,
  authorizeRoles("admin"),
  getAllUsers
);

export default userRouter;
