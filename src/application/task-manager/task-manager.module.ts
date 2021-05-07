import { Module } from '@nestjs/common';
import { TaskManagerController } from './task-manager.controller';
import { TaskManagerService } from './task-manager.service';



@Module({
    controllers:[TaskManagerController],
    providers:[TaskManagerService]
})
export class TaskManagerModule{

}