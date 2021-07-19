import { Repository } from 'typeorm';
import { CreateOwnerDto } from './dto/create-owner.input';
import { UpdateOwnerDto } from './dto/update-owner.input';
import { Owner } from './entities/ower.entity';
export declare class OwnerService {
    private ownerRepositoy;
    constructor(ownerRepositoy: Repository<Owner>);
    findAll(): Promise<Owner[]>;
    create(createownerdto: CreateOwnerDto): Promise<Owner>;
    findOne(id: string): Promise<Owner>;
    Update(id: string, updateDto: UpdateOwnerDto): Promise<UpdateOwnerDto & Owner>;
    Remove(id: string): Promise<import("typeorm").DeleteResult>;
}
