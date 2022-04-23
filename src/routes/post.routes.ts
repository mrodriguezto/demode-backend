import { Router } from "express";
import { 
    newPost, 
    getPosts,
    editPost,
    deletePost, 
} from "../controllers/post.controller";
import validateUser from "../middlewares/validateUser";

const router = Router();

router.get("/", getPosts);
router.post("/new", validateUser, newPost);
router.put("/:postId/edit", validateUser, editPost);
router.delete("/:postId/delete", validateUser, deletePost);

export default router;

