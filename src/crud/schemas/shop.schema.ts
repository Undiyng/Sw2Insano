import { Schema } from "mongoose";

export const ShopSchema = new Schema({
  name: {type: String, default: '' },
  location: {type: Object, default: {} },
  comments: {type: Array<Object>, default: [] }
});