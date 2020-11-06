import { Injectable } from '@angular/core';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    {
      id: '1',
      title: 'coca cola',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: 'assets/images/coca_cola.jpg',
      price: 2500
    },
    {
      id: '2',
      title: 'pepsi',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: 'assets/images/pepsi.jpg',
      price: 2200
    },
    {
      id: '3',
      title: 'nutella',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: 'assets/images/nutella.jpg',
      price: 15000
    },
    {
      id: '4',
      title: 'milo',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: 'assets/images/milo.jpg',
      price: 20000
    }
  ];
  constructor() { }

  getAllProducts(): Product[]{
    return this.products;
  }

  getProductById(id: string): Product{
    return this.products.find(item => id === item.id);
  }
}
