import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
    getProjects(){
        return ['Project 1','Project 2','Project 3']
    }
}
