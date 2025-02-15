import { Schema } from "mongoose";

export const RestaurantSchema = new Schema({
  name: {type:String, default: ''},
  email: {type:String, default: ''},
  password: {type:String, default: ''},
  profile: {type:String, default: ''},
  description: {type:String, default: ''},
  address: {type:Object, default: {}},
  viewed: {type:Number, default: 0},
  reviews: {type:Array<Object>, default: []}
});