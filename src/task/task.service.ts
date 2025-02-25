import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { CreateTaskDto } from './create-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    private readonly userService: UserService,
  ) {}

  findAll(): Promise<Task[]> {
    return this.taskRepository.find({ relations: ['assignedTo'] });
  }

  findOne(id: number): Promise<Task> {
    return this.taskRepository.findOne({ where: { id }, relations: ['assignedTo'] });
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description, status, assignedTo } = createTaskDto;
    
    const user = await this.userService.findOne(assignedTo);
    if (!user) {
      throw new Error('User not found');
    }

    const newTask = this.taskRepository.create({
      title,
      description,
      status,
      assignedTo: user,
    });
    
    return this.taskRepository.save(newTask);
  }

  async remove(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}