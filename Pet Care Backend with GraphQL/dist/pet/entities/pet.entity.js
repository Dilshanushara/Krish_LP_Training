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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
const graphql_1 = require("@nestjs/graphql");
const ower_entity_1 = require("../../owner/entities/ower.entity");
const typeorm_1 = require("typeorm");
let Pet = class Pet {
};
__decorate([
    graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Pet.prototype, "Id", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Pet.prototype, "Name", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Pet.prototype, "Age", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Pet.prototype, "Gender", void 0);
__decorate([
    typeorm_1.ManyToOne(() => ower_entity_1.Owner, owner => owner.pets),
    graphql_1.Field(() => ower_entity_1.Owner),
    __metadata("design:type", ower_entity_1.Owner)
], Pet.prototype, "owner", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Pet.prototype, "OwnerID", void 0);
Pet = __decorate([
    graphql_1.ObjectType(),
    typeorm_1.Entity()
], Pet);
exports.Pet = Pet;
//# sourceMappingURL=pet.entity.js.map