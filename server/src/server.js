import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js"
import notesRoutes from "./routes/notes.route.js"
import errorMiddleware from "./middlewares/error.middleware.js"

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/notes", notesRoutes)

app.use(errorMiddleware)

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running in localhost:${PORT}`);
});
