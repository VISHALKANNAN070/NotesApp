import { Link, useNavigate } from "react-router";
import { PlusIcon, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import api from "../lib/api.js";
import toast from "react-hot-toast";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/auth/check-auth", {
          withCredentials: true,
        });
        setUser(res.data.user);
      } catch (error) {
        setUser(null);
        console.error("Error fetching user name ", error);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      const res = await api.get("/auth/logout", { withCredentials: true });
      setUser(null);
      toast.success("Logout Successful.");
      navigate("/login");
    } catch (error) {
      toast.error("Logout Failed. Try again !");
      console.error("Error logout", error);
    }
  };
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold color-primary font-mono tracking-tight">
            NotesApp
          </h1>
          <div className="flex items-center gap-4 ">
            <Link to={"/create"} className="btn color-primary">
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
            {user && (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-sm btn-ghost rounded-btn"
                >
                  {user.name || user.email}
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <p>{user.email}</p>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 text-red-500 font-semibold"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
