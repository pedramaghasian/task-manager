import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "src/domain/dto/task-manager/create-task.dto";
import { EditTaskDto } from "src/domain/dto/task-manager/edit-task.dto";
import { TaskManager } from "src/infrastructure/database/mongo/models/task-manager.model";
import { TaskManagerRepository } from "src/infrastructure/database/mongo/repositories/task-manager.repository";

@Injectable()
export class TaskManagerService{
    constructor(private readonly taskManagerRepository:TaskManagerRepository){}

    findAll():Promise<TaskManager[]>{
        return this.taskManagerRepository.findAll()
    }

    create(createTaskData:CreateTaskDto):Promise<TaskManager>{
        return this.taskManagerRepository.create(createTaskData)
    }

    editById(id:string,editTaskData:EditTaskDto):Promise<TaskManager>{
        return this.editById(id,editTaskData)
    }

    deleteById(id:string):Promise<boolean>{
        return this.taskManagerRepository.deleteById(id)
    }

    getSingle(id:string):Promise<TaskManager>{
        return this.taskManagerRepository.getSingle(id)
    }

}