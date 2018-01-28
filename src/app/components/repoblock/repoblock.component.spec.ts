import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoblockComponent } from './repoblock.component';

describe('RepoblockComponent', () => {
  let component: RepoblockComponent;
  let fixture: ComponentFixture<RepoblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
