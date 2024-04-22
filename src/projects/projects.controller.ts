import { Controller, Get, Post,Put,Delete,Patch } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
    constructor(private projectsService:ProjectsService){
    
    }
 
     @Get('/projects')
     getAllProjects(){
 
         //con esto se puede buscar una bd
         //se puede buscar una peticion a otro backend o api
       return this.projectsService.getProjects();
     }
     @Post('/projects')
     createTasks(){
 
         //con esto se puede buscar una bd
         //se puede buscar una peticion a otro backend o api
       return 'Creando proyecto'
     }
     @Put('/projects')
     updateTasks(){
 
         //con esto se puede buscar una bd
         //se puede buscar una peticion a otro backend o api
       return 'Actualizando proyecto'
     }
     @Delete('/projects')
     deleteTasks(){
 
         //con esto se puede buscar una bd
         //se puede buscar una peticion a otro backend o api
       return 'Eliminando proyecto'
     }
     @Patch('/projects')
     updateProjectStatus(){
 
         //con esto se puede buscar una bd
         //se puede buscar una peticion a otro backend o api
       return 'Actualizando el estado de un proyecto'
     }
}
