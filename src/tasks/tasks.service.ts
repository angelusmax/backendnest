import { Injectable,HttpCode, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create.tasks.dto';
import { UpdateTaskDto } from './dto/update.tasks.dto';

export interface User{
    name:string;
    age:number;
}
@Injectable() //inyectar código en un controlador
export class TasksService {
    private tasks=[]
    getTasks(){
        return this.tasks;
    }
    getTask(id:number){
      const taskFound=  this.tasks.find(task=>task.id===id)
      if (!taskFound) {
        return new NotFoundException('tarea con id ${id} not found');
      }
      return taskFound
    }
    createTask(task:CreateTaskDto){
        console.log(task)
        this.tasks.push({
            ...task,
            id:this.tasks.length+1,
        });
        return task;
    }
    updateTasks(task:UpdateTaskDto){
        console.log(task)
        return 'Actualizando tarea'
    }
    deleteTasks(){
        return 'Eliminando tarea'
    }
    updateTasksStatus(){
        return 'Actualizando una tarea'
    }
    
}
