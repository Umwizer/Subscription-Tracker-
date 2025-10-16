import express from "express";
import cookieParser from "cookie-parser";
import { PORT } from "./config/env.js";

import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import SubscriptionRoutes from "./routes/subscription.routes.js";
import connectToDatabase from "./databases/mongodb.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/sub", SubscriptionRoutes);
app.use(cookieParser());
app.use(errorMiddleware);
app.get("/", (req, res) => {
  res.send("Welcome to the Subscription Tracker API!");
});

// Connect to MongoDB before starting the server
const startServer = async () => {
  try {
    await connectToDatabase(); // connect first
    app.listen(PORT, () => {
      console.log(
        `Subscription Tracker API is running on http://localhost:${PORT}`
      );
    });
  } catch (err) {
    console.error("Failed to start server:", err);
  }
};

startServer();

export default app;
