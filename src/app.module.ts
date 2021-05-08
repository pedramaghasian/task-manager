import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TaskManagerModule } from './application/task-manager/task-manager.module';
import { appConfig } from './config/app.config';
import { InfrastructureModule } from './infrastructure/infrastructure.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      load:[appConfig],
      envFilePath:['.env']
    }),
    TaskManagerModule,
    InfrastructureModule
  ],

})
export class AppModule {}
