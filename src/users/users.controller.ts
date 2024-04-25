import { Controller, Get, Post,Put,Delete, Patch, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class UsersController {
    constructor(private usersService:UsersService){
    
    }

@ApiTags('users')    
@Get('/users')
getAllUsers(){
    return this.usersService.getUsers();
}

@Post('/users')

 createUsers(@Body()user:CreateUserDto){

   return this.usersService.createUser(user);
  //return 'This is a post request
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
