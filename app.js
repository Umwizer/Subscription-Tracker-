import express from "express";
import { PORT } from "./config/env.js";

import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import SubscriptionRoutes from "./routes/subscription.routes.js";
const app = express();
// const PORT = 3000;

app.use("/api/v1/auth", authRoutes);
app.use("api/v1/user", userRoutes);
app.use("/api/v1/sub", SubscriptionRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to the Subscription Tracker API!");
});

app.listen(PORT, () => {
  console.log(
    `Subscription Tracker Api is running on http://localhost:${PORT}`
  );
});
export default app;
