import { Router } from "express";

const userRoutes = Router();

userRouter.get("/", (req, res) => {
  res.send("GET all User ");
});
userRouter.get("/:id", (req, res) => {
  res.send("GET User details ");
});
userRouter.post("/", (req, res) => {
  res.send("Create New User ");
});
userRouter.put("/:id", (req, res) => {
  res.send("Update User");
});
userRouter.delete("/:id", (req, res) => {
  res.send("delete user ");
});

export default userRoutes;
