import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { query } from "express";

@Controller('/tasks')
export class TasksController{
   //llama una clase instanciada
   
   constructor(private tasksService:TasksService){
    
   }

    @Get()
    getAllTasks(@Query()query:any){
      console.log(query)
        //con esto se puede buscar una bd
        //se puede buscar una peticion a otro backend o api
      return this.tasksService.getTasks();
    }
    @Get('/:id')
    getTask(@Param('id')id:string){
      console.log(id)
      return this.tasksService.getTask(parseInt(id));
    }
    @Post()
    createTasks(@Body()task:any){
        console.log(task)
        //con esto se puede b uscar una bd
        //se puede buscar una peticion a otro backend o api
      return this.tasksService.createTask(task);
    }
    @Put()
    updateTasks(){

        //con esto se puede buscar una bd
        //se puede buscar una peticion a otro backend o api
      return this.tasksService.updateTasks();
    }
    @Delete()
    deleteTasks(){

        //con esto se puede buscar una bd
        //se puede buscar una peticion a otro backend o api
      return this.tasksService.deleteTasks();
    }
    @Patch()
    updateTasksStatus(){

        //con esto se puede buscar una bd
        //se puede buscar una peticion a otro backend o api
      return this.tasksService.updateTasksStatus();
    }
}