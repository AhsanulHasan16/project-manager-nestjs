import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './create-task.dto';
import { UseGuards } from '@nestjs/common';
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';

@Resolver(() => Task)
@UseGuards(ThrottlerGuard)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [Task])
  tasks(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Mutation(() => Task)
  @Throttle({ default: { limit: 5, ttl: 60 } })
  createTask(@Args('title') title: string, @Args('description') description: string, @Args('status') status: string, @Args('assignedTo') assignedTo: number): Promise<Task> {
    const taskDto = new CreateTaskDto();
    taskDto.title = title;
    taskDto.description = description;
    taskDto.status = status;
    taskDto.assignedTo = { id: assignedTo } as any;
    return this.taskService.create(taskDto);
  }
}