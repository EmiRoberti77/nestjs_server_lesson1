import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { ProductsController } from 'src/products/products.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
