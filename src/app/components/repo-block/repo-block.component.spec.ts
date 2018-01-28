import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoBlockComponent } from './repo-block.component';

describe('RepoblockComponent', () => {
  let component: RepoBlockComponent;
  let fixture: ComponentFixture<RepoBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
