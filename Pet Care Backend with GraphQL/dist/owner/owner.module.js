"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerModule = void 0;
const common_1 = require("@nestjs/common");
const owner_service_1 = require("./owner.service");
const owner_resolver_1 = require("./owner.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const ower_entity_1 = require("./entities/ower.entity");
let OwnerModule = class OwnerModule {
};
OwnerModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([ower_entity_1.Owner])],
        providers: [owner_service_1.OwnerService, owner_resolver_1.OwnerResolver],
        exports: [owner_service_1.OwnerService]
    })
], OwnerModule);
exports.OwnerModule = OwnerModule;
//# sourceMappingURL=owner.module.js.map