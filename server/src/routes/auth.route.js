import express from "express"
import { register, login, logout, deleteAccount } from "../controllers/auth.controller.js"
import { validateToken } from "../middlewares/auth.middleware.js"

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.get("/logout", logout)
router.delete("/delete-account",validateToken,deleteAccount)

export default router