import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoBlockComponent } from './repo-block.component';
import { ToLocalePipe } from '../../pipes/to-locale/to-locale.pipe';
import { RepoColorService } from '../../services/repo-color/repo-color.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RepoblockComponent', () => {
  let component: RepoBlockComponent;
  let fixture: ComponentFixture<RepoBlockComponent>;

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
        RepoColorService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a repo and be created', () => {
    component.repo = {
      created_at: "2017-04-18T21:41:13Z",
      description: "A flashcard app made using Laravel for Japanese learners.",
      full_name: "kwboyd/ganba-app",
      html_url: "https://github.com/kwboyd/ganba-app",
      id: 88673052,
      language: "JavaScript",
      name: "ganba-app",
      owner: {
        login: "kwboyd", 
        id: 13855750, 
        avatar_url: "https://avatars0.githubusercontent.com/u/13855750?v=4",
        html_url: "https://api.github.com/users/kwboyd"
      },
      private: false,
      score: 15.518589,
      stargazers_count: 0,
      updated_at: "2017-04-20T04:11:34Z",
      url: "https://api.github.com/repos/kwboyd/ganba-app"
    }
    expect(component).toBeTruthy();
  });

});
