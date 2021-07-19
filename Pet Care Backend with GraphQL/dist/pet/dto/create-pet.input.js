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
exports.CreatePetInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const ower_entity_1 = require("../../owner/entities/ower.entity");
let CreatePetInput = class CreatePetInput {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreatePetInput.prototype, "Name", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], CreatePetInput.prototype, "Age", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreatePetInput.prototype, "Gender", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreatePetInput.prototype, "OwnerID", void 0);
CreatePetInput = __decorate([
    graphql_1.InputType()
], CreatePetInput);
exports.CreatePetInput = CreatePetInput;
//# sourceMappingURL=create-pet.input.js.map