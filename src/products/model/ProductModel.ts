import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: { type: String, require: true },
  price: { type: Number, require: true },
  quantity: { type: Number },
});

export const ProductModel = mongoose.model("products", productSchema);
