import {
    BadRequestException,
  HttpCode,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from 'src/domain/dto/task-manager/create-task.dto';
import { EditTaskDto } from 'src/domain/dto/task-manager/edit-task.dto';
import { TaskManager, TaskManagerDocument } from '../models/task-manager.model';

@Injectable()
export class TaskManagerRepository {
  constructor(
    @InjectModel(TaskManager.name)
    public taskManagerModel: Model<TaskManagerDocument>,
  ) {}

  async findAll(): Promise<TaskManagerDocument[]> {
    try{

        return this.taskManagerModel.find({});
    }catch(e){
        
    }
  }

  async create(data: CreateTaskDto): Promise<TaskManager> {
      try{
        return this.taskManagerModel.create(data);

      }catch(e){
        throw new BadRequestException('bad Request')

      }
  }

  async editById(id: string, data: EditTaskDto): Promise<TaskManager> {
      try{
        const task = await this.taskManagerModel.findById({ _id: id });
        if (!task) throw new NotFoundException('taks not found');
        const editedTask = await this.taskManagerModel.updateOne(
          { _id: id },
          { ...data },
        );
        if (editedTask) return task;
      }catch(e){
        throw new BadRequestException('bad Request')

      }

  }

  async deleteById(id: string): Promise<boolean> {
    try {
      const task = await this.taskManagerModel.findById({ _id: id });
      if (!task) throw new NotFoundException('taks not found');
      const deleteTask = await this.taskManagerModel.deleteOne({ _id: id });
      if (deleteTask) return true;
    } catch (e) {
        throw new BadRequestException('bad Request')
    }
  }

  async getSingle(id: string): Promise<TaskManager> {
    try {
      const task = await this.taskManagerModel.findById({ _id: id });
      if (!task) throw new NotFoundException('taks not found');
      return task;
    } catch (e) {
        throw new BadRequestException('bad Request')
    }
  }
}
