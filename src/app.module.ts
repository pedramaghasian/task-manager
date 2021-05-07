import { Module } from '@nestjs/common';
import { TaskManagerModule } from './application/task-manager/task-manager.module';


@Module({
  imports: [TaskManagerModule],

})
export class AppModule {}
