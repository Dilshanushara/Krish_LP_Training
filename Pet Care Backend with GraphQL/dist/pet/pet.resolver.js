"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const pet_service_1 = require("./pet.service");
const pet_entity_1 = require("./entities/pet.entity");
const create_pet_input_1 = require("./dto/create-pet.input");
const update_pet_input_1 = require("./dto/update-pet.input");
const ower_entity_1 = require("../owner/entities/ower.entity");
let PetResolver = class PetResolver {
    constructor(petService) {
        this.petService = petService;
    }
    createPet(createPetInput) {
        return this.petService.create(createPetInput);
    }
    findAll() {
        return this.petService.findAll();
    }
    findOne(id) {
        return this.petService.findOne(id);
    }
    updatePet(updatePetInput) {
        return this.petService.update(updatePetInput.id, updatePetInput);
    }
    removePet(id) {
        return this.petService.remove(id);
    }
    owner(pet) {
        return this.petService.getOwner(pet.OwnerID);
    }
};
__decorate([
    graphql_1.Mutation(() => pet_entity_1.Pet),
    __param(0, graphql_1.Args('createPetInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pet_input_1.CreatePetInput]),
    __metadata("design:returntype", void 0)
], PetResolver.prototype, "createPet", null);
__decorate([
    graphql_1.Query(() => [pet_entity_1.Pet], { name: 'getAllPets' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PetResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => pet_entity_1.Pet, { name: 'FindPet' }),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PetResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => pet_entity_1.Pet, { name: "UpdatePet" }),
    __param(0, graphql_1.Args('updatePetInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_pet_input_1.UpdatePetInput]),
    __metadata("design:returntype", void 0)
], PetResolver.prototype, "updatePet", null);
__decorate([
    graphql_1.Mutation(() => pet_entity_1.Pet, { name: "DeletePet" }),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PetResolver.prototype, "removePet", null);
__decorate([
    graphql_1.ResolveField(() => ower_entity_1.Owner),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pet_entity_1.Pet]),
    __metadata("design:returntype", void 0)
], PetResolver.prototype, "owner", null);
PetResolver = __decorate([
    graphql_1.Resolver(() => pet_entity_1.Pet),
    __metadata("design:paramtypes", [pet_service_1.PetService])
], PetResolver);
exports.PetResolver = PetResolver;
//# sourceMappingURL=pet.resolver.js.map