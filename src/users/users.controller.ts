import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  userService = new UsersService();
  @Get() //GET /users
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.userService.findAll(role);
  }

  @Get('interns')
  findAllInterns() {
    return [
      {
        name: 'John Smith',
        status: 'intern',
      },
    ];
  }

  @Get(':id') //GET /users/:id
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post() //POSt /users
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id') //PATCH /users/:id
  pathOne(@Param('id') id: string, @Body() updateUser: {}) {
    return {
      id,
      ...updateUser,
    };
  }

  @Delete(':id') //DELETE /users/:id
  deleteOne(@Param('id') id: string) {
    return {
      mode: 'delete',
      id,
    };
  }
}
