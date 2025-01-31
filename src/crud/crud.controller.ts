import { Controller, Post, Res, Body, HttpStatus, Get, Param, Put, Delete } from '@nestjs/common';
import { CrudService } from './crud.service';
import { CreateUserDTO } from './dto/user.dto';
import { CreateShopDTO } from './dto/shop.dto';

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

  //Direciones de las tiendas
  @Post('createShop')
  async createShop(@Res() resp, @Body() shopDTO: CreateShopDTO) {
    const newShop = await this.crudService.createShop(shopDTO);
    return resp.status(HttpStatus.OK).json({
      message: 'Tienda Creada',
      newShop: newShop
    });
  }
  @Get('getShops')
  async getAllShops(@Res() resp) {
    const shopsFound = await this.crudService.getAllShops();
    return resp.status(HttpStatus.OK).json({
      message: 'Todas las Tiendas',
      shopsFound: shopsFound
    });
  }
  @Get('getShops/:id')
  async getShop(@Res() resp, @Param('id') shopID: string) {
    const shopFound = await this.crudService.getShop(shopID);
    return resp.status(HttpStatus.OK).json({
      message: 'Tienda Encontrada',
      shopFound: shopFound
    });
  }
  @Put('updateShop/:id')
  async updateShop(@Res() resp, @Param('id') shopID: string, @Body() shopDTO: CreateShopDTO) {
    const shopUpdated = await this.crudService.updateShop(shopID, shopDTO);
    return resp.status(HttpStatus.OK).json({
      message: 'Tienda Actualizada',
      shopUpdated: shopUpdated
    });
  }
  @Delete('deleteShop/:id')
  async deleteShop(@Res() resp, @Param('id') shopID: string) {
    const shopDeleted = await this.crudService.deleteShop(shopID);
    return resp.status(HttpStatus.OK).json({
      message: 'Tienda Borrada',
      shopDeleted: shopDeleted
    });
  }


}
