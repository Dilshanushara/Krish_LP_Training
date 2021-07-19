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
exports.CreateOwnerDto = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateOwnerDto = class CreateOwnerDto {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreateOwnerDto.prototype, "FirstName", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreateOwnerDto.prototype, "LastName", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreateOwnerDto.prototype, "Address", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreateOwnerDto.prototype, "Email", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreateOwnerDto.prototype, "Mobile", void 0);
CreateOwnerDto = __decorate([
    graphql_1.InputType()
], CreateOwnerDto);
exports.CreateOwnerDto = CreateOwnerDto;
//# sourceMappingURL=create-owner.input.js.map