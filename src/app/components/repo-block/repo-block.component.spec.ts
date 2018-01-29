import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoBlockComponent } from './repo-block.component';
import { ToLocalePipe } from '../../pipes/to-locale/to-locale.pipe';
import { RepoColorService } from '../../services/repo-color/repo-color.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RepoblockComponent', () => {
  let component: RepoBlockComponent;
  let fixture: ComponentFixture<RepoBlockComponent>;

  const MockRepoColorService = {

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        RepoBlockComponent,
        ToLocalePipe
      ],
      imports: [
        BrowserAnimationsModule
      ],
      providers: [
        {provide: RepoColorService, useValue: MockRepoColorService},
      ]
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
