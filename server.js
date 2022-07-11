import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoConnect from "./config/dbConnection.js";
import routers from "./routes/index.js";

dotenv.config();
const app = express();
console.log("env =>", process.env.PORT);
mongoConnect();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routers(app);


app.get("/", (req, res) => {
  res.send("<h1>Social Media Server is Up and running</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT - ${process.env.PORT}`);
});
