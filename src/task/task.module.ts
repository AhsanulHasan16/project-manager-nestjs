import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { Task } from './task.entity';
import { TaskResolver } from './task.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  providers: [TaskService, TaskResolver],
  controllers: [TaskController],
  exports: [TaskService],
})
export class TaskModule {}