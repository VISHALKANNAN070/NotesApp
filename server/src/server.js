import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import noteRoutes from "./Routes/noteRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors({
  origin: process.env.CLIENT_URL,
}));
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", noteRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started at PORT :", PORT);
  });
});
