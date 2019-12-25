import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Receipe } from '../../receipes.model';
import {RecipesService} from '../../recipes.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {

  text: string;
  @Input('recipeItem') recipeItem: Receipe;
  @Input('index') index: number;

  // @Output() itemSelected  = new EventEmitter<string>();



  // itemClicked() {
  //   this.itemSelected.emit({
  //     name: this.recipeItem.name,
  //     description: this.recipeItem.description,
  //     imagepath: this.recipeItem.imagepath
  //   })
  // }

  // @Output() recipeSelected = new EventEmitter<void>();
  itemClicked() {
    this.recipesService.recipeSelected.emit(this.recipeItem);
    this.text = 'recipes/' + this.index;
    this.router.navigate([this.text]);
  }
  constructor(private recipesService: RecipesService,
              private router: Router) { }

  ngOnInit() {
  }

}
