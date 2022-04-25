import { Router } from "express";
import { getPreviewData } from "../controllers/index.controller";

const router = Router();

router.get("/", (req, res) => {
  res.send("No deberías estar aquí");
});

router.get("/preview", getPreviewData);

//exportación del Router para el index
export default router;
