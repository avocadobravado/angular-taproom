import { Component, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'new-beer',
  template: `
    <h1>Add a New Beer</h1>
    <div>
     <label>Enter Beer Name:</label>
     <input #newName>
   </div>
   <div>
   <label>Enter Brand Name:</label>
     <input #newBrand>
   </div>
   <div>
    <label>New price:</label>
      <input #newPrice>
    <div>
    <label>Beer ABV:</label>
      <input #newAbv>
    </div>
    <button (click)="submitForm(newName.value, newPrice.value, newAbv.value);">Add beer 🍺</button>
    </div>
  `
})

export class NewBeerComponent {
  @Output() newBeerSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, abv: number) {
    var newBeerToAdd: Beer = new Beer(name, brand, price, abv);
    this.newBeerSender.emit(newBeerToAdd);
    console.log(newBeerToAdd);
  }
}