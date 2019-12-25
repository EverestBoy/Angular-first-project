import { Ingredient } from '../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ShoppingListService{

    ingreadintsChanged = new EventEmitter();

    i: number = 0;
    ingAlreadyListed: Boolean;

    public ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

    getIngredient(){
        return this.ingredients.slice();
    }

    amount: number;
    ings: Ingredient;
    count: Number;

    deleteItem(name: string){
        this.i = 0;
        for( this.ings of this.ingredients){
            if(this.ings.name == name){
                this.ingredients.splice(this.i,1);
            }
            this.i++;
        }
        this.ingreadintsChanged.emit(this.ingredients.slice());

    }

    addIngredient(ing: {name: string, amount:number}){

        this.i = 0;
        this.ingAlreadyListed = false;

        console.log(ing)


        for(this.ings of this.ingredients){
            if(this.ings.name == ing.name){
                this.ingredients[this.i].amount = this.ings.amount + ing.amount;
                this.ingAlreadyListed = true;
            }
            this.i++;
        }

        if( !this.ingAlreadyListed ){
            this.ingredients.push(ing)
        }



        // for (this.ings of this.ingredients){
        //     if(this.ings.name = ing.name){
        //         this.ingredients[this.i].amount = ing.amount+this.ings.amount;
        //         this.ingAlreadyListed = true;
        //     }
        //     this.i++;
        // }

        // if(!this.ingAlreadyListed){
        //     this.ingredients.push(ing);
        // }


        this.ingreadintsChanged.emit(this.ingredients.slice())
    }
}
