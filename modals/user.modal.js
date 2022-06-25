import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const userModal = mongoose.model("User", userSchema);

export default userModal;
