import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import passport  from "passport";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import authRoutes from "./Routes/authRoutes.js";
import noteRoutes from "./Routes/noteRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";
import "./middleware/passport.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials:true,
}));

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(rateLimiter);

app.use("/api/auth",authRoutes)
app.use("/api/notes", noteRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started at PORT :", PORT);
  });
});
