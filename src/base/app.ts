import express from "express";
import cors from "cors";
import env from "./env";

import authRoutes from "../routes/auth.routes";
import indexRoutes from "../routes/index.routes";

const app = express();

// Setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("port", env.PORT);

// Routes

app.use("/", indexRoutes);
app.use("/auth", authRoutes);

export default app;
