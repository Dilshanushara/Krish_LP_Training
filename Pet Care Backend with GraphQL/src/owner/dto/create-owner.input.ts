import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class CreateOwnerDto{
    @Field()
    FirstName:string
    @Field()
    LastName:string
    @Field()
    Address:string
    @Field()
    Email:string
    @Field()
    Mobile:string
}