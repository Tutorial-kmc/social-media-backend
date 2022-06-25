import express from "express";
import userRoutes from "./userRoutes.js";
const router = express.Router();

const routers = (app) => {
  app.use("/api/user", userRoutes);
};

export default routers;
