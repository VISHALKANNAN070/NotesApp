import { Link } from "react-router-dom";

const NoteCard = ({ note, onDelete }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md">
      <Link to={`/notes/${note.id}`}>
        <h3 className="truncate text-lg font-semibold text-gray-800">{note.title}</h3>
        <p className="mt-1 line-clamp-3 text-sm text-gray-500">{note.content}</p>
      </Link>
      <button
        onClick={() => onDelete(note.id)}
        className="mt-3 text-sm font-medium text-red-500 hover:text-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default NoteCard;