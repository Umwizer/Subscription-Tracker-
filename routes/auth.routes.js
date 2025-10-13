import { Router } from "express";

const authRoutes = Router();

// You can later add a valid route handler like:
authRoutes.post("/sign-up", (req, res) => {
  res.send("Sign Up successful!");
});
authRoutes.post("/sign-in", (req, res) => {
  res.send("Sign In");
});
authRoutes.post("/sign-out", (req, res) => {
  res.send("Sign out Successful!");
});
export default authRoutes;
