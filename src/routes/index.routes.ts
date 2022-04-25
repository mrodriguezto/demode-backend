import { Router } from "express";
import { getPreviewData, getUser } from "../controllers/index.controller";
import validateUser from "../middlewares/validateUser";

const router = Router();

router.get("/", (req, res) => {
  res.send("No deberías estar aquí");
});

router.get("/preview", getPreviewData);
router.get("/my-info", validateUser, getUser);

//exportación del Router para el index
export default router;
