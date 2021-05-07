import { ApiProperty } from '@nestjs/swagger';
import {  IsOptional, IsString, Length } from 'class-validator';


export class EditTaskDto{

    @ApiProperty({ example: 'new title', description: 'the title of your task' })
    @IsOptional()
    @IsString()
    @Length(3,255)
    title:string

    @ApiProperty({ example: 'some descripton about your task', description: 'some descripton about your task' })
    @IsOptional()
    @IsString()
    @Length(3,1000)
    description:string
}