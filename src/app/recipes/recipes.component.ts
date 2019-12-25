import { Component, OnInit } from '@angular/core';
import { Receipe } from './receipes.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Receipe;
  a = 'sdf'


  // getRecipe(selectedRecipe: Receipe){
  //   this.selectedRecipe = selectedRecipe;
  //   console.log("Recipe name is "+selectedRecipe.name)
  // }

  onItemSelected(){
    console.log("dlsjflsjdfj");
  }


  test(item: string){
    console.log(item);
  }


  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.recipeSelected.subscribe((recipe: Receipe) => {
      this.selectedRecipe = recipe;
    })
  }

}
