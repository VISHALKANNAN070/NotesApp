import { api } from "./auth.js";

export const createNote = (data) => api.post("/notes", data);

export const getAllNotes = () => api.get("/notes");

export const getNoteById = (id) => api.get(`/notes/${id}`);

export const updateNote = (id, data) => api.put(`/notes/${id}`, data);

export const deleteNote = (id) => api.delete(`/notes/${id}`);