import { Injectable,HttpCode, NotFoundException } from '@nestjs/common';
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
    createTask(task:any){
        console.log(task)
        this.tasks.push({
            ...task,
            id:this.tasks.length+1,
        });
        return task;
    }
    updateTasks(){
        return 'Actualizando tarea'
    }
    deleteTasks(){
        return 'Eliminando tarea'
    }
    updateTasksStatus(){
        return 'Actualizando una tarea'
    }
    
}
