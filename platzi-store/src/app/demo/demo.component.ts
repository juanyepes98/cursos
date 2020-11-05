import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  items = ['JJYA', 'VPG', 'MYP'];
  power = 10;
  title = 'Platzi-store';
  constructor() { }
  add(): void{
    this.items.push('Soy una posición nueva');
  }
  remove(index: number): void{
    this.items.splice(index, 1);
  }
  ngOnInit(): void {
  }

}
