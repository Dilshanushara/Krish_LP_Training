import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document} from "mongoose";


export type PetDocuemnt= Pet & Document;

@Schema()
export class Pet{

    @Prop()
    Id:string;
    @Prop()
    Name:string;
    @Prop()
    Age:number;
    @Prop()
    Gender:string;

}

export const PetSchema= SchemaFactory.createForClass(Pet);