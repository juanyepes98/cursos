import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../product';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges, OnInit, OnDestroy{
    @Input()
    product: Product;

    @Output()
    addToCart: EventEmitter<any> = new EventEmitter();

    today: Date = new Date();

    /**
     * Se ejecuta al construir el componente
     */
    constructor(){
        console.log('constructor');
    }

    /**
     * Se ejecuta cada vez que se cambia un input del componente
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void{
        console.log('ngOnChanges');
        console.log(changes);
    }

    /**
     * Se ejecuta cuando el componente ya ha sido cargado graficamente - buena practica consumir apis aquí
     */
    ngOnInit(): void{
        console.log('ngOnInit');
    }

    ngOnDestroy(): void{
        console.log('ngOnDestroy');
    }

    addCart(): void{
        console.log('Add to cart');
        this.addToCart.emit(this.product);
    }
}
