import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, minimize: false, versionKey: false })
export class TaskManager {
  @Prop({
    type: String,
    required: true,
    trim: true,
  })
  title: string;

  @Prop({
    type: String,
    required: true,
    trim: true,
  })
  description: string;
}
export const TaskManagerSchema = SchemaFactory.createForClass(TaskManager);
export type TaskManagerDocument = TaskManager & Document;
