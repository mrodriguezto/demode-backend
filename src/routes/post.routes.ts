import { Router } from "express";
import { newPost, getPosts } from "../controllers/post.controller";
import validateUser from "../middlewares/validateUser";

const router = Router();

router.get("/", getPosts);
router.post("/new", validateUser, newPost);

export default router;

