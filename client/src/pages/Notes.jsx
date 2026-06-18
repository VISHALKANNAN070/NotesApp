// src/pages/Notes.jsx
import { useState, useEffect } from "react";
import { getAllNotes, createNote, deleteNote } from "../api/notes";
import NoteCard from "../components/NoteCard";
import NoteForm from "../components/NoteForm";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const { data } = await getAllNotes();
        setNotes(data);
      } catch {
        setError("Failed to load notes");
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  const handleCreate = async (formData) => {
    try {
      const { data } = await createNote(formData);
      setNotes((prev) => [data, ...prev]);
      setShowForm(false);
    } catch {
      setError("Failed to create note");
    }
  };
  
  const handleDelete = async (id) => {
    try {
      window.confirm(("Are you sure to delete the note ?"))
      await deleteNote(id);
      setNotes((prev) => prev.filter((note) => note.id !== id));
    } catch {
      setError("Failed to delete note");
    }
  };

  if (loading) return <p className="p-6 text-gray-500">Loading notes...</p>;

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Your Notes</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          {showForm ? "Cancel" : "New Note"}
        </button>
      </div>

      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

      {showForm && (
        <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4">
          <NoteForm onSubmit={handleCreate} submitLabel="Create Note" />
        </div>
      )}

      {notes.length === 0 ? (
        <p className="text-gray-500">No notes yet — create your first one.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Notes;