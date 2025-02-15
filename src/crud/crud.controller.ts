import { Controller, Post, Res, Body, HttpStatus, Get, Param, Put, Delete } from '@nestjs/common';
import { CrudService } from './crud.service';
import { CreateUserDTO } from './dto/user.dto';
import { CreateRestaurantDTO } from './dto/restaurant.dto';

@Controller('...')
export class CrudController {

  constructor(
    private readonly crudService: CrudService
  ){}

  //Direcciones de los usuarios
  @Post('createUser')
  async createUser(@Res() resp, @Body() userDTO: CreateUserDTO) {
    const newUser = await this.crudService.createUser(userDTO);
    return resp.status(HttpStatus.OK).json({
      message: 'Usuario Creado'
    });
  }
  @Get('getUsers')
  async getAllUsers(@Res() resp) {
    const usersFound = await this.crudService.getAllUsers();
    return resp.status(HttpStatus.OK).json({
      message: 'Todos los Usuarios',
      usersFound: usersFound
    });
  }
  @Get('getUsers/:id')
  async getUser(@Res() resp, @Param('id') userID: string) {
    const userFound = await this.crudService.getUser(userID);
    return resp.status(HttpStatus.OK).json({
      message: 'Usuario Encontrado',
      userFound: userFound
    });
  }
  @Put('updateUser/:id')
  async updateUser(@Res() resp, @Param('id') userID: string, @Body() userDTO: CreateUserDTO) {
    const userUpdated = await this.crudService.updateUser(userID, userDTO);
    return resp.status(HttpStatus.OK).json({
      message: 'Usuario Actualizado',
      userUpdated: userUpdated
    });
  }
  @Delete('deleteUser/:id')
  async deleteUser(@Res() resp, @Param('id') userID: string) {
    const userDeleted = await this.crudService.deleteUser(userID);
    return resp.status(HttpStatus.OK).json({
      message: 'Usuario Borrado',
      userDeleted: userDeleted
    });
  }

  //Direciones de los restaurantes
  @Post('createRestaurant')
  async createRestaurant(@Res() resp, @Body() restaurantDTO: CreateRestaurantDTO) {
    const newRestaurant = await this.crudService.createRestaurant(restaurantDTO);
    return resp.status(HttpStatus.OK).json({
      message: 'Restaurante Creado',
      newRestaurant
    });
  }
  @Get('getRestaurants')
  async getAllRestaurants(@Res() resp) {
    const restaurantsFound = await this.crudService.getAllRestaurants();
    return resp.status(HttpStatus.OK).json({
      message: 'Todos los Restaurantes',
      restaurantsFound
    });
  }
  @Get('getRestaurants/:id')
  async getRestaurant(@Res() resp, @Param('id') restaurantID: string) {
    const restaurantFound = await this.crudService.getRestaurant(restaurantID);
    return resp.status(HttpStatus.OK).json({
      message: 'Tienda Encontrada',
      restaurantFound
    });
  }
  @Put('updateRestaurant/:id')
  async updateRestaurant(@Res() resp, @Param('id') restaurantID: string, @Body() restaurantDTO: CreateRestaurantDTO) {
    const restaurantUpdated = await this.crudService.updateRestaurant(restaurantID, restaurantDTO);
    return resp.status(HttpStatus.OK).json({
      message: 'Tienda Actualizada',
      restaurantUpdated
    });
  }
  @Delete('deleteRestaurant/:id')
  async deleteRestaurant(@Res() resp, @Param('id') restaurantID: string) {
    const restaurantDeleted = await this.crudService.deleteRestaurant(restaurantID);
    return resp.status(HttpStatus.OK).json({
      message: 'Tienda Borrada',
      restaurantDeleted
    });
  }
}
