import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTaskDto } from 'src/domain/dto/task-manager/create-task.dto';
import { EditTaskDto } from 'src/domain/dto/task-manager/edit-task.dto';
import { TaskManagerService } from './task-manager.service';
import { ApiImplicitQuery } from '@nestjs/swagger/dist/decorators/api-implicit-query.decorator';
import { TaskManager } from 'src/infrastructure/database/mongo/models/task-manager.model';
import { TaskManagerRepository } from 'src/infrastructure/database/mongo/repositories/task-manager.repository';

@ApiTags('Task-Manager')
@Controller('task')
export class TaskManagerController {
  constructor(private readonly taskManagerService: TaskManagerService) {}
  @Post()
  @ApiOperation({ summary: 'Create task' })
  @ApiResponse({ status: 201, description: 'Successfully create task' })
  @ApiResponse({ status: 404, description: 'task not found' })
  @ApiResponse({ status: 500, description: 'server error' })
  create(@Body() createTaskData: CreateTaskDto): Promise<TaskManager> {
    return this.taskManagerService.create(createTaskData);
  }

  @Get()
  @ApiOperation({ summary: 'Get All tasks' })
  @ApiResponse({ status: 200, description: 'Successfully get all task' })
  @ApiResponse({ status: 404, description: 'task not found' })
  findAll(): Promise<TaskManager[]> {
    return this.taskManagerService.findAll();
  }

  @Get(':taskId')
  @ApiOperation({ summary: 'Get Single  task by id' })
  @ApiResponse({ status: 200, description: 'Successfully get task' })
  @ApiResponse({ status: 404, description: 'task not found' })
  get (@Param('taskId') taskId: string):Promise<TaskManager> {
    return this.taskManagerService.getSingle(taskId);
  }

  @Patch(':taskId')
  @ApiOperation({ summary: 'Update task' })
  @ApiResponse({ status: 201, description: 'Successfully Update task' })
  @ApiResponse({ status: 404, description: 'task not found' })
  editById(
    @Param('taskId') id: string,
    @Body() editTaskData: EditTaskDto,
  ): Promise<TaskManager> {
    return this.taskManagerService.editById(id, editTaskData);
  }

  @Delete(':taskId')
  @ApiOperation({ summary: 'Delete Post' })
  @ApiResponse({ status: 200, description: 'Successfully delete post' })
  @ApiResponse({ status: 404, description: 'post not found' })
  deleteById(@Param('taskId') id: string): Promise<boolean> {
    return this.taskManagerService.deleteById(id);
  }
}
