import { Module, forwardRef } from '@nestjs/common';
import { CrudController } from './crud.controller';
import { CrudService } from './crud.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { RestaurantSchema } from './schemas/restaurant.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports:[MongooseModule.forFeature([
    { name: 'User', schema: UserSchema },
    { name: 'Restaurant', schema: RestaurantSchema }
  ]),
  forwardRef(() => AuthModule), 
],
  controllers: [CrudController],
  providers: [CrudService],
  exports: [CrudService],

})
export class CrudModule {}
