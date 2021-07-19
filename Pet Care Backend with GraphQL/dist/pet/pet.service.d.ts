import { OwnerService } from 'src/owner/owner.service';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Pet } from './entities/pet.entity';
export declare class PetService {
    private petrepository;
    private ownerservice;
    constructor(petrepository: Repository<Pet>, ownerservice: OwnerService);
    create(createPetInput: CreatePetInput): Promise<CreatePetInput & Pet>;
    findAll(): Promise<Pet[]>;
    findOne(id: string): Promise<Pet>;
    update(id: string, updatePetInput: UpdatePetInput): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    getOwner(id: string): Promise<import("../owner/entities/ower.entity").Owner>;
}
