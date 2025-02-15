import { Module } from '@nestjs/common';
import { CrudController } from './crud.controller';
import { CrudService } from './crud.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { RestaurantSchema } from './schemas/restaurant.schema';

@Module({
  imports:[MongooseModule.forFeature([
    { name: 'User', schema: UserSchema },
    { name: 'Restaurant', schema: RestaurantSchema }
  ])],
  controllers: [CrudController],
  providers: [CrudService]
})
export class CrudModule {}
