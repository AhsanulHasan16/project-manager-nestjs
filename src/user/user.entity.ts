import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, OneToMany } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Task } from '../task/task.entity';

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

  @Field(() => [Task])
  @OneToMany(() => Task, (task) => task.assignedTo)
  tasks: Task[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

}  