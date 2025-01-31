import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CrudModule } from './crud/crud.module';

@Module({
  imports: [
    CrudModule,
    MongooseModule.forRoot('mongodb://localhost/backendswii')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
