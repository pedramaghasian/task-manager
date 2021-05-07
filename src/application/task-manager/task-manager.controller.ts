import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateTaskDto } from "src/domain/dto/task-manager/create-task.dto";
import { EditTaskDto } from "src/domain/dto/task-manager/edit-task.dto";
import { TaskManagerService } from "./task-manager.service";


@Controller('task')
export class TaskManagerController {
    constructor(private readonly taskManagerService:TaskManagerService){}

    @Get()
    findAll():string{
       return this.taskManagerService.findAll()
    }

    @Post()
    create(@Body() createTaskData:CreateTaskDto):string{
        return this.taskManagerService.create(createTaskData)
    }

    @Patch(':taskId')
    editById( @Param() id:number, @Body() editTaskData:EditTaskDto):string{
        return this.taskManagerService.editById(id,editTaskData)
    }

    @Delete(':taskId')
    deleteById(@Param() id:number):string{
        return this.taskManagerService.deleteById(id)
    }


}