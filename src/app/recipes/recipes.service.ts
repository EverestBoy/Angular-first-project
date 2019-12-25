import { Receipe } from './receipes.model';
import {EventEmitter, Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipesService{

  recipeSelected = new EventEmitter<Receipe>();
  recipeToEdit = new EventEmitter<Receipe>();

  recipesChanged = new EventEmitter();

  private receipes: Receipe[] = [
        new Receipe("Momos",
          "Best food",
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.cZJYhGi8tVf3Ygg--7veDAHaFa%26pid%3DApi&f=1",
          [new Ingredient('Maida',1),
            new Ingredient('Onion',1)]),
        new Receipe("Chowmin",
            "Chinese food",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FbvUBR2zTB2A%2Fmaxresdefault.jpg&f=1&nofb=1",
            [])
      ];
    getRecipe() {
        return this.receipes.slice();
    }

    addRecipe(recipe: {name: string, description: string, imagepath: string, ingredients: Ingredient[]}){
        this.receipes.push(recipe);
        this.recipesChanged.emit(this.receipes.slice());
        console.log('item added');
        console.log(this.receipes);
    }

    getRecipeSingle(index: number) {
      return this.receipes.slice()[index];
    }

    editRecipe(recipe: Receipe, index: number){
      recipe.ingredients = this.receipes[index].ingredients;
      this.receipes[index] = recipe;
      this.recipesChanged.emit(this.receipes.slice());
    }

}
