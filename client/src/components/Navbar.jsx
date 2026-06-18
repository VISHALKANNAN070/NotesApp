import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  if (!user) return null;

  return (
    <nav className="border-b px-6 py-4">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <Link to="/notes" className="font-semibold">
          Notes
        </Link>

        <div className="flex items-center gap-4 text-sm">
          <Link to="/profile">Profile</Link>

          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
