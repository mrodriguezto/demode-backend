import { Router } from "express";
import {
  newProduct,
  getProducts,
  editProduct,
  deleteProduct,
} from "../controllers/product.controller";
import validateUser from "../middlewares/validateUser";

const router = Router();

router.get("/", getProducts);
router.post("/new", validateUser, newProduct);
router.put("/:productId/edit", validateUser, editProduct);
router.delete("/:productId/delete", validateUser, deleteProduct);

export default router;
