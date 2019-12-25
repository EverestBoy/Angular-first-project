import { Component, OnInit, Input } from '@angular/core';
import { Receipe } from '../receipes.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  id: number;
  index: string;
  @Input('recipe') recipe: Receipe;
  notFound = false;


  constructor(private shoppingListService: ShoppingListService,
              private recipesService: RecipesService,
              private route: ActivatedRoute,
              private router: Router) { }

  // @Input('recipe') recipeItem: Receipe;

  // @Input('srvElement') element: { type: string, name: string, content: string };

  // test(){
  //   console.log("sdf "+this.recipeItem.name);
  // }
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log("id is ")
        this.id = +params['id'];
        this.notFound = this.id != null;
        this.recipe = this.recipesService.getRecipeSingle(this.id);
      }
    );
  }

  ingredients: Ingredient;
  addIngToShopping(){

    for ( this.ingredients of this.recipe.ingredients){
      this.shoppingListService.addIngredient(this.ingredients);
    }
  }

  editRecipe(){
    this.index = 'recipes/' + this.id + '/edit';
    this.recipesService.recipeToEdit.emit(this.recipe);
    // this.route.navigate()
    console.log(this.index);
    this.router.navigate([this.index]);
  }

}
