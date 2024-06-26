import { Injectable } from '@nestjs/common';
export interface Product {
  item: string;
}
@Injectable()
export class ProductsService {
  products: Product[] = [
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

  findAll(item?: string): Product[] {
    if (item) {
      return this.products.filter((product) => product.item === item);
    }

    return this.products;
  }
}
