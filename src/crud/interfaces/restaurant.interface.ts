import { Document } from "mongoose";

export interface reviewObject {
  idUser: string;
  comment: string;
  calification: number;
  responses: reviewObject[];
}


export interface Restaurant extends Document {
  name: string;
  email: string;
  password: string;
  profile: string;
  description: string;
  address: {};
  viewed: number;
  reviews: reviewObject[];
}