import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("No deberías estar aquí");
});

//exportación del Router para el index
export default router;
