import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      title: 'coca cola',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: 'assets/images/coca_cola.jpg',
      price: 2500
    },
    {
      id: 2,
      title: 'pepsi',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: 'assets/images/pepsi.jpg',
      price: 2200
    },
    {
      id: 3,
      title: 'nutella',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: 'assets/images/nutella.jpg',
      price: 15000
    },
    {
      id: 4,
      title: 'milo',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: 'assets/images/milo.jpg',
      price: 20000
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  addToCart(event: any): void{
    console.log('Add to cart on component', event);
  }

}
