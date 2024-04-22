import { Controller, Get, Post,Put,Delete, Patch } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
    constructor(private usersService:UsersService){
    
    }
@Get('/users')
getAllUsers(){
    return this.usersService.getUsers();
}

@Post('/users')
 createUsers(){

     //con esto se puede buscar una bd
     //se puede buscar una peticion a otro backend o api
   return 'Creando usuario'
 }
 @Put('/users')
 updateUsers(){

     //con esto se puede buscar una bd
     //se puede buscar una peticion a otro backend o api
   return 'Actualizando usuario'
 }
 @Delete('/users')
 deleteUsers(){

     //con esto se puede buscar una bd
     //se puede buscar una peticion a otro backend o api
   return 'Eliminando usuario'
 }
 @Patch('/users')
 updateUsersStatus(){

     //con esto se puede buscar una bd
     //se puede buscar una peticion a otro backend o api
   return 'Actualizando el estado de un usuario'
 }
}
