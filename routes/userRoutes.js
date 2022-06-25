import express from "express";
import { getAllUsers, userSignup } from "../controllers/userController.js";

const router = express.Router();

router.get("/getAllUsers", getAllUsers);

router.post("/signup", userSignup);

export default router;
