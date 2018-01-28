import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortmenuComponent } from './sortmenu.component';

describe('SortmenuComponent', () => {
  let component: SortmenuComponent;
  let fixture: ComponentFixture<SortmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
