import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Receipe } from '../receipes.model';
import { RecipesService } from '../recipes.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  i = 0;
  addItemOpen = false;

  receipes: Receipe[] ;



  // @Output() recipeWasSelected = new EventEmitter<Receipe>()
  // onRecipeSelected(recipe:Receipe){
  //   this.recipeWasSelected.emit(recipe);
  // }


  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.receipes = this.recipeService.getRecipe();
    this.recipeService.recipesChanged.subscribe((recipes: Receipe[]) => {
      this.receipes = recipes;
    });
  }

  openAddItem() {
    this.addItemOpen = true;
  }
  onCancelClicked() {
    this.addItemOpen = false;
  }
  onItemInserted(recipeItem: Receipe) {
    this.recipeService.addRecipe(recipeItem);
    // this.receipes.push(recipeItem);
    console.log('hello');
    this.addItemOpen = false;
  }

}
