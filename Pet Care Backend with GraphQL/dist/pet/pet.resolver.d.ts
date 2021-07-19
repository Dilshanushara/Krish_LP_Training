import { PetService } from './pet.service';
import { Pet } from './entities/pet.entity';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Owner } from 'src/owner/entities/ower.entity';
export declare class PetResolver {
    private readonly petService;
    constructor(petService: PetService);
    createPet(createPetInput: CreatePetInput): Promise<CreatePetInput & Pet>;
    findAll(): Promise<Pet[]>;
    findOne(id: string): Promise<Pet>;
    updatePet(updatePetInput: UpdatePetInput): Promise<import("typeorm").UpdateResult>;
    removePet(id: string): Promise<import("typeorm").DeleteResult>;
    owner(pet: Pet): Promise<Owner>;
}
