import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookCardComponent } from './components/book-card/book-card.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, BookCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  newProduct: any = {
    title: '',
    price: 0,
    description: ''
  };

  addProduct() {
    if (this.newProduct.title && this.newProduct.price) {
      this.products.push({
        title: this.newProduct.title,
        price: this.newProduct.price,
        description: this.newProduct.description || ''
      });

      this.newProduct = {
        title: '',
        price: 0,
        description: ''
      };
    }
  }

  title = 'El Librero';
  date: Date = new Date();
  showBooks = true;

  products = [
    {
      title: 'Harry Potter y la piedra filosofal',
      price: 80000,
      description: 'Description 1'
    },

    {
      title: 'Percy Jackson y el ladron del rayo',
      price: 56000,
      description: 'Description 2'
    },

    {
      title: 'El código da Vinci',
      price: 63000,
      description: 'Description 3'
    }
  ]

}
