import { CreatePetInput } from './create-pet.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePetInput {
  @Field()
  id: string;
  @Field()
  Name:string
  @Field()
  Age:number
  @Field()
  Gender:string
  // @Field()
  // OwnerID:string
}
