import { Module } from '@nestjs/common';
import {Tasksmodule} from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';

@Module({
  imports: [Tasksmodule, ProjectsModule, AuthModule, UsersModule],
  controllers: [HelloController],
 
})
export class AppModule {}
