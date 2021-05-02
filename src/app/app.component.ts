import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzistorescss';

  items = ['hola', 'chao', 'que tal']

    products: Product[] = [
      {
        id: '1',
        image: 'assets/camisa.png',
        title: 'Camisa',
        price: 40000,
        description: 'bla bla bla'
      },
      {
        id: '2',
        image: 'assets/hoodie.png',
        title: 'Hoodie',
        price: 40000,
        description: 'bla bla bla'
      },
      {
        id: '3',
        image: 'assets/chaquetatraje.png',
        title: 'Traje',
        price: 40000,
        description: 'bla bla bla'
      },
      {
        id: '4',
        image: 'assets/chemisenegra.png',
        title: 'Chemise',
        price: 40000,
        description: 'bla bla bla'
      },
      {
        id: '5',
        image:  'assets/tshirt.png',
        title: 'T shirt',
        price: 40000,
        description: 'bla bla bla'
      },
    ]

  addItem(){
    this.items.push('Nuevo saludo')
  }

  deleteItem(index: number){
    this.items.splice(index, 1)


  }
}
