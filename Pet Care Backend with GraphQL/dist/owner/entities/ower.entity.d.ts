import { Pet } from "src/pet/entities/pet.entity";
export declare class Owner {
    id: string;
    FirstName: string;
    LastName: string;
    Address: string;
    Email: string;
    Mobile: string;
    pets: Pet[];
}
