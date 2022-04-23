import { Router } from "express";
import { getEvents, newEvent, editEvent, deleteEvent } from "../controllers/event.controller";
import validateUser from "../middlewares/validateUser";

const router = Router();

router.get("/", getEvents);
router.post("/new", validateUser, newEvent);
router.put("/:eventId/edit", validateUser, editEvent);
router.delete("/:eventId/delete", validateUser, deleteEvent);

export default router;
