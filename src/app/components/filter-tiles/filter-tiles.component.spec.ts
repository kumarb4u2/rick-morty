import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTilesComponent } from './filter-tiles.component';

describe('FilterTilesComponent', () => {
  let component: FilterTilesComponent;
  let fixture: ComponentFixture<FilterTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
