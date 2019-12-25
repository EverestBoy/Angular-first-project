import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeAddsComponent } from './recipe-adds.component';

describe('RecipeAddsComponent', () => {
  let component: RecipeAddsComponent;
  let fixture: ComponentFixture<RecipeAddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeAddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeAddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
