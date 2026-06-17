import express from "express";
import {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
} from "../controllers/notes.controller.js";
import { validateToken } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/", validateToken, createNote);
router.get("/", validateToken, getAllNotes);
router.get("/:id", validateToken, getNoteById);
router.put("/:id", validateToken, updateNote);
router.delete("/:id", validateToken, deleteNote);

export default router;
