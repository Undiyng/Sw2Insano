import { reviewObject } from "../interfaces/restaurant.interface";

export class CreateRestaurantDTO {
  name: string;
  email: string;
  password: string;
  profile: string;
  description: string;
  address: {};
  viewed: number;
  reviews: reviewObject[];
}