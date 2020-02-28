import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSpellComponent } from './item-spell.component';

describe('ItemSpellComponent', () => {
  let component: ItemSpellComponent;
  let fixture: ComponentFixture<ItemSpellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSpellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSpellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
