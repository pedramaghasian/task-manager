import { ApiProperty } from '@nestjs/swagger';
import {  IsNotEmpty, IsString, Length } from 'class-validator';


export class CreateTaskDto{
    @IsString()
    @Length(3,255)
    @ApiProperty({
        type: String,
        example: 'some title',
      })
    title:string

   
    @IsString()
    @Length(3,1000)
    @ApiProperty({
        type: String,
        example: 'some description about something',
      })
    description:string
}