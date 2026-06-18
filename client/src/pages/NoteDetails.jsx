// src/pages/NoteDetails.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNoteById, updateNote, deleteNote } from "../api/notes";
import NoteForm from "../components/NoteForm";

const NoteDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const { data } = await getNoteById(id);
        setNote(data);
      } catch {
        setError("Note not found");
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);

  const handleUpdate = async (formData) => {
    try {
      const { data } = await updateNote(id, formData);
      setNote(data);
      navigate("/notes")
    } catch {
      setError("Failed to save changes");
    }
  };
  
  const handleDelete = async () => {
    try {
      await deleteNote(id);
      navigate("/notes");
    } catch {
      setError("Failed to delete note");
    }
  };

  if (loading) return <p className="p-6 text-gray-500">Loading note...</p>;
  if (error) return <p className="p-6 text-red-600">{error}</p>;

  return (
    <div className="mx-auto max-w-2xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Edit Note</h1>
        <button
          onClick={handleDelete}
          className="rounded-md bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-100"
        >
          Delete Note
        </button>
      </div>

      <NoteForm key={note.id} initialData={note} onSubmit={handleUpdate} submitLabel="Save Changes" />
    </div>
  );
};

export default NoteDetails;