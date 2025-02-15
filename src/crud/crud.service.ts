import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/user.dto';
import { Restaurant } from './interfaces/restaurant.interface';
import { CreateRestaurantDTO } from './dto/restaurant.dto';

@Injectable()
export class CrudService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    @InjectModel('Restaurant') private readonly restaurantModel: Model<Restaurant>
  ) {}

  //Serivicios para usuarios
  async createUser(userDTO: CreateUserDTO): Promise<User> {
    const newUser = await this.userModel.create(userDTO);
    return await newUser.save();
  }

  async getAllUsers(): Promise<User[]> {
    const usersFound = await this.userModel.find();
    return usersFound;
  }

  async getUser(userID: string): Promise<User> {
    const user = await this.userModel.findById(userID);
    return user;
  }

  async updateUser(userID: string, userDTO: CreateUserDTO): Promise<User> {
    //el valor {new:true} se usa para retornar el usuario despues de actualizarlo
    const userUpdated = await this.userModel.findByIdAndUpdate(userID, userDTO, {new:true});
    return userUpdated;
  }

  async deleteUser(userID: string): Promise<User> {
    //el valor {new:false} se usa para retornar el usuario antes de ser borrado
    const userDeleted = await this.userModel.findByIdAndDelete(userID, {new:false});
    return userDeleted;
  }


  //Serivicios para restaurantes
  async createRestaurant(restaurantDTO: CreateRestaurantDTO): Promise<Restaurant> {
    const newRestaurant = await this.restaurantModel.create(restaurantDTO);
    return await newRestaurant.save();
  }

  async getAllRestaurants(): Promise<Restaurant[]> {
    const restaurantsFound = await this.restaurantModel.find();
    return restaurantsFound;
  }

  async getRestaurant(restaurantID: string): Promise<Restaurant> {
    const restaurant = await this.restaurantModel.findById(restaurantID);
    return restaurant;
  }

  async updateRestaurant(restaurantID: string, restaurantDTO: CreateRestaurantDTO): Promise<Restaurant> {
    //el valor {new:true} se usa para retornar la tienda despues de actualizarla
    const restaurantUpdated = await this.restaurantModel.findByIdAndUpdate(restaurantID, restaurantDTO, {new:true});
    return restaurantUpdated;
  }

  async deleteRestaurant(restaurantID: string): Promise<Restaurant> {
    //el valor {new:false} se usa para retornar la tienda antes de ser borrada
    const restaurantDeleted = await this.restaurantModel.findByIdAndDelete(restaurantID, {new:false});
    return restaurantDeleted;
  }

}
