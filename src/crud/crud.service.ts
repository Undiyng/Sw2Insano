import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/user.dto';
import { Shop } from './interfaces/shop.interface';
import { CreateShopDTO } from './dto/shop.dto';

@Injectable()
export class CrudService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    @InjectModel('Shop') private readonly shopModel: Model<Shop>
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


  //Serivicios para negocios
  async createShop(shopDTO: CreateShopDTO): Promise<Shop> {
    const newShop = await this.shopModel.create(shopDTO);
    return await newShop.save();
  }

  async getAllShops(): Promise<Shop[]> {
    const shopsFound = await this.shopModel.find();
    return shopsFound;
  }

  async getShop(shopID: string): Promise<Shop> {
    const shop = await this.shopModel.findById(shopID);
    return shop;
  }

  async updateShop(shopID: string, shopDTO: CreateShopDTO): Promise<Shop> {
    //el valor {new:true} se usa para retornar la tienda despues de actualizarla
    const shopUpdated = await this.shopModel.findByIdAndUpdate(shopID, shopDTO, {new:true});
    return shopUpdated;
  }

  async deleteShop(shopID: string): Promise<Shop> {
    //el valor {new:false} se usa para retornar la tienda antes de ser borrada
    const shopDeleted = await this.shopModel.findByIdAndDelete(shopID, {new:false});
    return shopDeleted;
  }

}
