import dotenv from "dotenv";

dotenv.config();

export default {
  MONGO_DATABASE: process.env.MONGO_DATABASE || "demode-db",
  MONGO_USER: process.env.MONGO_USER || "admin",
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || "admin",
  MONGO_HOST: process.env.MONGO_HOST || "localhost",
  PORT: process.env.PORT || "5000",
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:3000",
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || "secret-key",
};
