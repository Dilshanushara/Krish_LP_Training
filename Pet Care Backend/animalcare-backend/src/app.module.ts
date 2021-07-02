import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECTION } from './app.properties';
import { OwnerModule } from './owner/owner.module';
import { PetModule } from './pet/pet.module';


@Module({
  imports: [OwnerModule, PetModule,MongooseModule.forRoot(MONGO_CONNECTION) ],

 
})
export class AppModule {}
