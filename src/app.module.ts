import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CrudModule } from './crud/crud.module';
import { AuthModule } from './auth/auth.module'; 

@Module({
  imports: [
    CrudModule,
    MongooseModule.forRoot('mongodb://172.26.58.38:27017/nest')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}