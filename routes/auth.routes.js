import { Router } from "express";

const authRoutes = Router();

// You can later add a valid route handler like:
authRoutes.post("/sign-up", (req, res) => {
  res.send("Sign Up successful!");
});

export default authRoutes;
