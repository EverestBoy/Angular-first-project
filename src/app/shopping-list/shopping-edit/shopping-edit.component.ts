import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import {MatInputModule} from '@angular/material/input'; 

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ingredient: Ingredient;

  ngOnInit() {
  }

  @Output('insertShopping') insertNewShopping = new EventEmitter<Ingredient>();
  addShoppingItem(nameInput: HTMLInputElement, valueInput: HTMLInputElement){
    this.ingredient = new Ingredient(nameInput.value, valueInput.valueAsNumber);
    // this.insertNewShopping.emit(this.ingredient);
    // console.log(this.ingredient.name, this.ingredient.amount);
    this.shoppingListService.addIngredient(this.ingredient);
  }

}
