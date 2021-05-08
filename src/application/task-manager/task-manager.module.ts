import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskManager, TaskManagerSchema } from 'src/infrastructure/database/mongo/models/task-manager.model';
import { TaskManagerRepository } from 'src/infrastructure/database/mongo/repositories/task-manager.repository';
import { TaskManagerController } from './task-manager.controller';
import { TaskManagerService } from './task-manager.service';



@Module({
    imports: [ MongooseModule.forFeature([ { name: TaskManager.name, schema: TaskManagerSchema }]) ],
    controllers:[TaskManagerController],
    providers:[TaskManagerService , TaskManagerRepository]
})
export class TaskManagerModule{

}