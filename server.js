import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
console.log("env =>", process.env.PORT);
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Social Media Server is Up</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT - ${process.env.PORT}`);
});
