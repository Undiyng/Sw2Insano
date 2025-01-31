import { Document } from "mongoose";

export interface Shop extends Document {
  name: string;
  location: {};
  comments: {}[];
}