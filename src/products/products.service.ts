import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  findAll() {
    return [
      {
        item: 'shoes',
      },
      {
        item: 'jeans',
      },
      {
        item: 'hats',
      },
    ];
  }
}
