import { Schema } from "mongoose";

export const UserSchema = new Schema({
  name: {type: String, default: '' },
  email: {type: String, default: '' },
  password: {type: String, default: '' }
});