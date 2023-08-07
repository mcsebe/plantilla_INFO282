import { Router } from "express";
import {
  getUsers,
  createUser,
  updateUser,
  getUser,
  deleteUser,
  getUserPapers,
} from "../controllers/user.controller.js";

const router = Router();

// Routes
router.post("/", createUser);
router.get("/", getUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);

router.get("/:id/papers", getUserPapers);

export default router;
