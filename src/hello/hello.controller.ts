import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request,query,response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('/') //aqui se coloca la ruta
export class HelloController {
    //cuando visiten la pagina principal aparece hello
   @Get('/hello')
    index(@Req()request:Request,@Res()reponse:Response){
        console.log(request.url)
        response.status(200).json({
            message:'Hello Word',
        });
    }
    @Get('new')
    @HttpCode(201)//Codigo de estado http 201 creado
    somethingNew(){
        return "Something new"
    }
    @Get('not found')
    @HttpCode(404)//esta es una forma de mostrar un codigo http en el mensaje
    notFoundPage(){
        return'404 mot found'
    }
    @Get('error')
    @HttpCode(500)//esta es una forma de mostrar un codigo http en el mensaje
    errorPage(){
        return'Error Route!!'
    }
    @Get('ticket/:num')
    getNumber(@Param('num',ParseIntPipe)num:number){
        return num+14;
    }
    @Get('active/:status')
    isUserActive(@Param('status',ParseBoolPipe)status:boolean)
    {
        console.log(typeof status)
        return status;
    }

    @Get('greet')
    @UseGuards(AuthGuard)//este decorador nos permite proteger las rutas con autenticacion
    greet(@Query(ValidateuserPipe)query:{name:string,age:number})
    {
        console.log(typeof query.age)
        console.log(typeof query.name)
        return 'Hello ${query.name}, you are ${query.age} years old';
    }   
}
