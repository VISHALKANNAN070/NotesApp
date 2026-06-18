import bcrypt from "bcrypt";
import {
  findUserByEmail,
  findUserByUserId,
  createUser,
} from "../services/auth.service.js";
import { deleteUser } from "../services/auth.service.js";
import { generateToken } from "../middlewares/auth.middleware.js";

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name?.trim() || !email?.trim() || !password) {
      return res.status(400).json({
        message: "Name, email and password are required",
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters",
      });
    }
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json("Email already exists");
    }
    const passwordHash = await bcrypt.hash(password, 12);

    const user = await createUser(name, email, passwordHash);
    return res
      .status(201)
      .json({ message: "Register Successful", user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json("Couldn't find data");
    }
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) {
      return res.status(401).json({ message: "Wrong Password" });
    }
    const token = generateToken(user.id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.DEPLOYMENT_TYPE === "production",
      sameSite: process.env.DEPLOYMENT_TYPE === "production" ? "none":"lax",
    });

    return res.status(200).json({
      user:{id:user.id,name:user.name,email:user.email},
      message: "Login Successful",
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.DEPLOYMENT_TYPE === "production",
      sameSite: "lax",
    });
    return res.status(200).json({ message: "Logout Successful" });
  } catch (error) {
    next(error);
  }
};

export const deleteAccount = async (req, res, next) => {
  try {
    const { password } = req.body;
    if (!password) {
      return res.status(400).json({
        message: "Password is required",
      });
    }
    const user = await findUserByUserId(req.user.userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const match = await bcrypt.compare(password, user.password_hash);

    if (!match) {
      return res.status(401).json({
        message: "Wrong password",
      });
    }
    await deleteUser(user.id);
    res.clearCookie("token");
    return res.status(200).json({ message: "Account deletion Successful" });
  } catch (error) {
    next(error);
  }
};
