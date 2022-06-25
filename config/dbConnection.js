import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log("p", process.env.MONGO_URI);

const mongoConnect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo DB connected");
  } catch (error) {
    console.log("Error in mongoConnect =>", error);
  }
};

export default mongoConnect;
