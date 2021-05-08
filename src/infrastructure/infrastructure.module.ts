import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
@Module({
    imports:[
        MongooseModule.forRoot('mongodb://localhost/taskManager',{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            

        })
    ]
})

export class InfrastructureModule {}

