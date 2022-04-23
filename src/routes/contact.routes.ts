import { Router } from "express";
import { getContacts, newContact } from "../controllers/contact.controller";
import validateUser from "../middlewares/validateUser";

const router = Router();

router.get("/", validateUser, getContacts);
router.post("/new", newContact);

export default router;
