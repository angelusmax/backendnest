import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request,response } from 'express';

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
}
