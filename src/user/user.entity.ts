import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
@Entity()

export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()  
  id: number;  

  @Field()
  @Column()  
  email: string;  

  @Column()  
  password: string;  

  @Field()
  @Column({ default: 'user' })  
  role: string; 

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

}  