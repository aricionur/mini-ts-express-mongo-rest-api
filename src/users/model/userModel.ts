import mongoose, { Schema, Document, Types } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
});

export const UserModel = mongoose.model("users", userSchema);
