import {Component, ElementRef, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {RecipesService} from '../recipes.service';
import {Receipe} from '../receipes.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  recipe: Receipe;
  index: string;
  editMode = false;
  recipesChanged = new EventEmitter();
  @ViewChild('nameInput', { static: false, }) nameInputRef: ElementRef;
  @ViewChild('descriptionInput', { static: false, }) descriptionInputRef: ElementRef;
  @ViewChild('imageInput', { static: false, }) imageInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService,
              private recipesService: RecipesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        console.log(this.editMode)
        // this.recipe = this.recipesService.getRecipeSingle(this.id);
        // console.log(this.recipe);
        // this.index = 'recipes/' + this.id ;
      }
    );
  }
  onCancelClicked() {
    this.router.navigate([this.index]);
  }

  onEditClicked() {
    this.recipe = new Receipe(
      this.nameInputRef.nativeElement.value,
      this.descriptionInputRef.nativeElement.value,
      this.imageInputRef.nativeElement.value,[]);

    this.recipesService.editRecipe(this.recipe, this.id);

    // this.recipesService.receipes[this.id] = this.recipe;
    // console.log("Recipe is ");
    // console.log(this.recipe)
    // this.recipesChanged.emit(this.recipesService.receipes.slice());
    this.router.navigate([this.index]);
  }

}
