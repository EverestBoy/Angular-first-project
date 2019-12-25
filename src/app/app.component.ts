import { Component } from '@angular/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import {RecipesService} from './recipes/recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService, RecipesService]
})


export class AppComponent {

  constructor(private shoppingListService: ShoppingListService) { }

  title = 'shoppingList';

  loadedFeature =  'recipe';

  onNagivate(feature: string){
    this.loadedFeature = feature;
    console.log(this.loadedFeature);
  }


}
