import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users= [
    {
        id:1,
        name:'Jhon Dale',
        phone:'1234567890'
    },
    {
        id:2,
        name:'Jane Dale',
        phone:'0123456789'
    }
]

    getUsers(){
        return this.users;
    }
}
