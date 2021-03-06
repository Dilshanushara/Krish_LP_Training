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
exports.OwnerResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const create_owner_input_1 = require("./dto/create-owner.input");
const update_owner_input_1 = require("./dto/update-owner.input");
const ower_entity_1 = require("./entities/ower.entity");
const owner_service_1 = require("./owner.service");
let OwnerResolver = class OwnerResolver {
    constructor(ownersevice) {
        this.ownersevice = ownersevice;
    }
    findAll() {
        return this.ownersevice.findAll();
    }
    create(createownerdto) {
        return this.ownersevice.create(createownerdto);
    }
    findOne(id) {
        return this.ownersevice.findOne(id);
    }
    update(id, updateDto) {
        return this.ownersevice.Update(id, updateDto);
    }
    Remove(id) {
        return this.ownersevice.Remove(id);
    }
};
__decorate([
    graphql_1.Query(() => [ower_entity_1.Owner], { name: "getAllOwners" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OwnerResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Mutation(() => ower_entity_1.Owner, { name: "CreateOwner" }),
    __param(0, graphql_1.Args('owner')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_owner_input_1.CreateOwnerDto]),
    __metadata("design:returntype", void 0)
], OwnerResolver.prototype, "create", null);
__decorate([
    graphql_1.Query(() => ower_entity_1.Owner, { name: "FindOwner" }),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OwnerResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => ower_entity_1.Owner, { name: "UpdateOwner" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_owner_input_1.UpdateOwnerDto]),
    __metadata("design:returntype", void 0)
], OwnerResolver.prototype, "update", null);
__decorate([
    graphql_1.Mutation(() => ower_entity_1.Owner, { name: "DeleteOwner" }),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OwnerResolver.prototype, "Remove", null);
OwnerResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [owner_service_1.OwnerService])
], OwnerResolver);
exports.OwnerResolver = OwnerResolver;
//# sourceMappingURL=owner.resolver.js.map