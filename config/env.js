import { config } from "dotenv";

// Load environment variables from .env file based on NODE_ENV
config({
  path: `.env.${process.env.NODE_ENV || "development"}.local`,
});

// Destructure variables from process.env
export const { PORT, NODE_ENV, DB_URI } = process.env;
