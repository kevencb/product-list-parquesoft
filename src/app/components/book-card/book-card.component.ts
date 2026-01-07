import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'book-card',
  imports: [CommonModule],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})

export class BookCardComponent {
  @Input() title: any;
  @Input() price: any;
  @Input() description: any;

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
