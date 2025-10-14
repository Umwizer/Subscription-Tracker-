import { Router } from "express";

const userRoutes = Router();

userRoutes.get("/", (req, res) => {
  res.send("GET all User ");
});
userRoutes.get("/:id", (req, res) => {
  res.send("GET User details ");
});
userRoutes.post("/", (req, res) => {
  res.send("Create New User ");
});
userRoutes.put("/:id", (req, res) => {
  res.send("Update User");
});
userRoutes.delete("/:id", (req, res) => {
  res.send("delete user ");
});

export default userRoutes;
