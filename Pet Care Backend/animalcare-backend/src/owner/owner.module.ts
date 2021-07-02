import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OwnerController } from './controller/owner.controller';
import { OwnerRepository } from './repository/Owner.repoistory';
import { Owner, OwnerSchema } from './schema/Owner.schema';
import { OwnerService } from './service/owner.service';

@Module({
  imports:[MongooseModule.forFeature([{name:Owner.name,schema:OwnerSchema}])],
  controllers: [OwnerController],
  providers: [OwnerService,OwnerRepository]
})
export class OwnerModule {}
