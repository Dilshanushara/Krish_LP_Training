import { Body, Controller, Delete, Get, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { request } from 'express';
import { OwnerService } from '../service/owner.service';
import { OwnerCreateDto } from '../dto/OwnerCreate.dto';
import { OwnerSearchDto } from '../dto/OwnerSearch.dto';
import { OwnerUpdateDto } from '../dto/OwnerUpdate.dto';
import { Owner } from '../schema/Owner.schema';

@Controller('owner')
export class OwnerController {

    constructor(private ownerService : OwnerService){
    }

    @Get()
   async getAllOwners(@Query()param:OwnerSearchDto):Promise<Owner[]>
    {
      return await this.ownerService.getAllOwners();
    }
    
    @Post()
    @UsePipes(ValidationPipe)
    async CreateOwner(@Body()ownercreateDto:OwnerCreateDto):Promise<Owner>{
      return await this.ownerService.createOwner(ownercreateDto);
    }

    @Get('/:id')
    async getOwnerByID(@Param('id') id:string){
      return await this.ownerService.getOwnerByID(id);
    }

    @Put('/:id')
    @UsePipes(ValidationPipe)
    async updateOwner(@Param('id')id:string,@Body()ownerupdateDto:OwnerUpdateDto){
      return await this.ownerService.updateOwner(id,ownerupdateDto);
    }

    @Delete('/:id')
    deleteOwner(@Body('id') id:string){
      this.ownerService.deleteOwner(id);
    }

}
