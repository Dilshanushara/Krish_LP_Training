import { CreateOwnerDto } from './dto/create-owner.input';
import { UpdateOwnerDto } from './dto/update-owner.input';
import { Owner } from './entities/ower.entity';
import { OwnerService } from './owner.service';
export declare class OwnerResolver {
    private ownersevice;
    constructor(ownersevice: OwnerService);
    findAll(): Promise<Owner[]>;
    create(createownerdto: CreateOwnerDto): Promise<Owner>;
    findOne(id: string): Promise<Owner>;
    update(id: string, updateDto: UpdateOwnerDto): Promise<UpdateOwnerDto & Owner>;
    Remove(id: string): Promise<import("typeorm").DeleteResult>;
}
