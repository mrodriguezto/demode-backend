import express from "express";
import cors from "cors";

import env from "./env";

import authRoutes from "../routes/auth.routes";
import indexRoutes from "../routes/index.routes";
import productRoutes from "../routes/product.routes";
import eventRoutes from "../routes/event.routes";
import postRoutes from "../routes/post.routes";
import contactRoutes from "../routes/contact.routes";

const app = express();

// Setup
app.use(
  cors({
    origin: env.CLIENT_URL,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("port", env.PORT);

// Routes

app.use("/", indexRoutes);
app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/events", eventRoutes);
app.use("/posts", postRoutes);
app.use("/contact", contactRoutes);

export default app;
