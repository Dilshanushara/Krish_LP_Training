import { InputType, Int, Field } from '@nestjs/graphql';
import { Owner } from 'src/owner/entities/ower.entity';

@InputType()
export class CreatePetInput {

  @Field()
  Name:string
  @Field()
  Age:number
  @Field()
  Gender:string
  @Field()
  OwnerID:string
}
