import { Controller, Get, Inject, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('USER_SERVICE') private userService: ClientProxy,
    private readonly appService: AppService,
  ) {}

  @Get('user/:id')
  getUser(@Param('id') id: number) {
    return this.userService.send({ cmd: 'get_user' }, { id: Number(id) });
  }
}
