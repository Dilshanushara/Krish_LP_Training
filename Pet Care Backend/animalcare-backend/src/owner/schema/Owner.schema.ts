import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document} from "mongoose";

export type OwnerDocuemnt= Owner & Document;

@Schema()
export class Owner{
    @Prop()
    Id:string
    @Prop()
    FirstName:string
    @Prop()
    LastName:string
    @Prop()
    Address:string
    @Prop()
    Email:string
    @Prop()
    Mobile:string

   
}

export const OwnerSchema= SchemaFactory.createForClass(Owner);