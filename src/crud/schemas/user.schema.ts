import { Schema } from "mongoose";

export const UserSchema = new Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  password: { type: String, default: '' },
  profile: { type: String, default: '' },
  description: { type: String, default: '' },
  favorites: [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }],
  historial: [{ type: Schema.Types.ObjectId, ref: 'Restaurant', default: [] }]
});