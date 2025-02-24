import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [Task])
  tasks(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Mutation(() => Task)
  createTask(@Args('title') title: string, @Args('description') description: string, @Args('status') status: string, @Args('assignedTo') assignedTo: number): Promise<Task> {
    const task = new Task();
    task.title = title;
    task.description = description;
    task.status = status;
    task.assignedTo = { id: assignedTo } as any;
    return this.taskService.create(task);
  }
}