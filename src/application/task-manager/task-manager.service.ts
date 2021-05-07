import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "src/domain/dto/task-manager/create-task.dto";
import { EditTaskDto } from "src/domain/dto/task-manager/edit-task.dto";

@Injectable()
export class TaskManagerService{

    findAll():string{
        return 'this is findAll'
    }

    create(createTaskData:CreateTaskDto):string{
        return 'this is create'
    }

    editById(id:number,editTaskData:EditTaskDto):string{
        return 'this is edit'
    }

    deleteById(id:number):string{
        return 'this is delete'
    }

}