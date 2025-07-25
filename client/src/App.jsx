import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import CreatePage from "./components/CreatePage";
import NoteDetailPage from "./components/NoteDetailPage";
import LoginPage from "./assets/LoginPage";
import ProtectedRoute from "./assets/ProtectedRoute";

const App = () => {
  return (
    <>
      <div data-theme="luxury" className="bg-base-100 min-h-screen">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create"
            element={
              <ProtectedRoute>
                <CreatePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/note/:id"
            element={
              <ProtectedRoute>
                <NoteDetailPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
