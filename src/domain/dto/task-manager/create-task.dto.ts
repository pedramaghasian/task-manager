import { ApiProperty } from '@nestjs/swagger';
import {  IsNotEmpty, IsString, Length } from 'class-validator';


export class CreateTaskDto{


    @ApiProperty({ example: 'new title', description: 'the title of your task' })
    @IsString()
    @Length(3,255)
    title:string

    @ApiProperty({ example: 'some descripton about your task', description: 'some descripton about your task' })
    @IsString()
    @Length(3,1000)
    description:string
}