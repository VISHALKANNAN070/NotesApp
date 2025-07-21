import Navbar from "../assets/Navbar";
import { useEffect, useState } from "react";
import api from "../lib/api";
import { LoaderIcon } from "lucide-react";
import { toast } from "react-hot-toast";
import NoteCard from "../assets/NoteCard";
import RateLimit from "../assets/RateLimit";
import NoteNotFound from "../assets/NoteNotFound";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (err) {
        console.error("Error fetching notes:", err);
        if (err.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to fetch notes. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimit />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
<div className="min-h-screen bg-base-100 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>        )}

        {notes.length ===0 && !isRateLimited && !loading && <NoteNotFound/>}

        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cold-3 xl:grid-cols-4 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes = {setNotes}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
