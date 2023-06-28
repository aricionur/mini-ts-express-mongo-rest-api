import { Types } from "mongoose";

export interface ProductDto {
  _id?: Types.ObjectId;
  name?: string;
  price?: number;
  quantity?: number;
}
