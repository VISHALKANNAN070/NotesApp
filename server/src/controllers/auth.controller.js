import bcrypt from "bcrypt";
import { findUserByEmail, createUser } from "../services/auth.service";
import validateToken from "../middlewares/auth.middleware.js";

export const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      return res.status(409).json("Email already exists");
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await createUser(username, email, passwordHash);
    return res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const match = await bcrypt.compare(password, user.passwordHash);

    if (!match) {
      return res.status(401).json({ message: "Wrong Password" });
    }

    const token = validateToken(user.id);

    res.cookie("token", token, {
      httpOnly: false,
      secure: false,
      sameSite: "lax",
      maxAge: 3600000,
    });
    res.status(200).json({
      message: "Login Successful",
    });
  } catch (error) {
    next(error);
  }
};
