import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { PetController } from './controller/pet.controller';
import { PetService } from './service/pet.service';
import { PetRepository } from './repository/Pet.repository';
import { Pet, PetSchema } from './schema/Pet.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Pet.name,schema:PetSchema}])],
  controllers: [PetController],
  providers: [PetService,PetRepository]
})
export class PetModule {}
