import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Receipe } from '../../receipes.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-adds',
  templateUrl: './recipe-adds.component.html',
  styleUrls: ['./recipe-adds.component.css']
})
export class RecipeAddsComponent implements OnInit {

  @ViewChild('nameInput', { static: false, }) nameInputRef: ElementRef;
  @ViewChild('descriptionInput', { static: false, }) descriptionInputRef: ElementRef;
  @ViewChild('imageInput', { static: false, }) imageInputRef: ElementRef;

  recipe: Receipe;


  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
  }


  @Output('cancel') cancel = new EventEmitter<void>();
  onCancelClicked(){
    this.cancel.emit();
  }

  // @Output('insertRecipe') insertNewRecipe = new EventEmitter<Receipe>();
  onAddClicked() {
    this.recipe = new Receipe(
      this.nameInputRef.nativeElement.value,
      this.descriptionInputRef.nativeElement.value,
      this.imageInputRef.nativeElement.value,
      []
    );
    // this.insertNewRecipe.emit(this.recipe);
    this.recipeService.addRecipe(this.recipe);
    this.cancel.emit();
  }

}
