import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query} from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { query } from "express";
import { CreateTaskDto } from "./dto/create.tasks.dto";
import { UpdateTaskDto } from "./dto/update.tasks.dto";




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
    
    createTask(@Body()task:CreateTaskDto){
       return this.tasksService.createTask(task);
    }
   
    createTasks(@Body()task:CreateTaskDto){
        console.log(task)
        //con esto se puede b uscar una bd
        //se puede buscar una peticion a otro backend o api
      return this.tasksService.createTask(task);
    }
    @Put()
    updateTasks(@Body()task:UpdateTaskDto){

       
      return this.tasksService.updateTasks(task);
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