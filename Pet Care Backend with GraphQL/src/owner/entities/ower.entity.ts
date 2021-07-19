import { Field, ObjectType } from "@nestjs/graphql"
import { Pet } from "src/pet/entities/pet.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@ObjectType()
@Entity()
export class Owner{
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Field()
    @Column()
    FirstName:string
    @Field()
    @Column()
    LastName:string
    @Field()
    @Column()
    Address:string
    @Field()
    @Column()
    Email:string
    @Field()
    @Column()
    Mobile:string

    @OneToMany(()=>Pet,pet=>pet.owner)
    @Field(()=>[Pet],{nullable:true})
    pets:Pet[]

    
}