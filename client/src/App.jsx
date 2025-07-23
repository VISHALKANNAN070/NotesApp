import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import CreatePage from "./components/CreatePage";
import NoteDetailPage from "./components/NoteDetailPage";

const App = () => { 
  return (
    <>
    <div data-theme="night" className="bg-base-100 min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
      </div>
    </>
  );
};

export default App;
