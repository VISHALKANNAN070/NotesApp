import * as NotesService from "../services/notes.service.js";

export const createNote = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const { title, content } = req.body;
    const note = await NotesService.createNote(userId, title, content);
    return res.status(201).json(note);
  } catch (error) {
    next(error);
  }
};

export const getAllNotes = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const notes = await NotesService.getAllNotes(userId);
    return res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

export const getNoteById = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const { id } = req.params;
    const note = await NotesService.getNoteById(userId, id);
    return res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};

export const updateNote = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const { title, content } = req.body;
    const { id } = req.params;
    const note = await NotesService.updateNote(userId, id, title, content);
    return res.status(200).json({ note, message: "Updated Note" });
  } catch (error) {
    next(error);
  }
};

export const deleteNote = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const { id } = req.params;
    await NotesService.deleteNote(userId, id);
    return res.status(200).json({ message: "Deleted Note" });
  } catch (error) {
    next(error);
  }
};
