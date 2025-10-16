import { Router } from "express";
import { signOut, signUp, singIn } from "../controllers/auth.controllers";

const authRoutes = Router();

//Path: /api/v1/auth/sign-up(POST)
authRoutes.post("/sign-up", signUp);
//Path: /api/v1/auth/sign-in(POST)
authRoutes.post("/sign-in", singIn);
//Path: /api/v1/auth/sign-out(POST)
authRoutes.post("/sign-out", signOut);
export default authRoutes;
