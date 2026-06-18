import { createContext, useContext, useState } from "react";
import {
  loginUser,
  registerUser,
  logoutUser,
  deleteAccount as deleteAccountApi,
} from "../api/auth.js";
import { setUser as cacheUser, getUser, removeUser } from "../utils/storage.js";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUser());

  const login = async (credentials) => {
    const { data } = await loginUser(credentials);
    setUser(data.user);
    cacheUser(data.user);
  };

  const register = async (details) => {
    const { data } = await registerUser(details);
    return data;
  };

  const logout = async () => {
    await logoutUser();
    setUser(null);
    removeUser();
  };

  const deleteAccount = async () => {
    await deleteAccountApi();
    setUser(null);
    removeUser();
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, deleteAccount }}
    >
      {" "}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
