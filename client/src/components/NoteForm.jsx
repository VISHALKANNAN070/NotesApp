import { useState } from "react";

const NoteForm = ({ initialData = { title: "", content: "" }, onSubmit, submitLabel = "Save" }) => {
  const [form, setForm] = useState(initialData);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        required
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        name="content"
        placeholder="Write your note..."
        value={form.content}
        onChange={handleChange}
        rows={8}
        required
        className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
      >
        {submitLabel}
      </button>
    </form>
  );
};

export default NoteForm;