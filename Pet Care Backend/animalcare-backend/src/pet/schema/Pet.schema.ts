import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Mongoose} from "mongoose";
import { Owner } from "src/owner/schema/Owner.schema";
import * as mongoose from 'mongoose'


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
    @Prop({type:mongoose.Schema.Types.ObjectId, ref: 'Owner'})
    OwnerId:Owner;

}

export const PetSchema= SchemaFactory.createForClass(Pet);