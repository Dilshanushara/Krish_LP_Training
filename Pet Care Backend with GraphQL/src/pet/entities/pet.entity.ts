import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Owner } from 'src/owner/entities/ower.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Pet {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  Id :string
  @Field()
  @Column()
  Name:string
  @Field()
  @Column()
  Age:number
  @Field()
  @Column()
  Gender:string

  @ManyToOne(()=>Owner,owner=> owner.pets)
  @Field(()=>Owner)
  owner:Owner

  @Field()
  @Column()
  OwnerID:string
}
