import { Router } from "express";
import { newProduct, getProducts } from "../controllers/product.controller";
import validateUser from "../middlewares/validateUser";

const router = Router();

router.get("/", getProducts);
router.post("/new", validateUser, newProduct);

export default router;
