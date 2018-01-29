import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SortMenuComponent } from './components/sort-menu/sort-menu.component';
import { RepoBlockComponent } from './components/repo-block/repo-block.component';
import { ToLocalePipe } from './pipes/to-locale/to-locale.pipe';
import { FormsModule } from '@angular/forms';
import { QueryService } from './services/query/query.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeaderService } from './services/header/header.service';
import { By } from '@angular/platform-browser';

let fixture;
let app;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SearchBarComponent,
        SortMenuComponent,
        RepoBlockComponent,
        ToLocalePipe
      ],
      imports: [
        FormsModule,
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        QueryService, HeaderService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  describe('function setQuery', ()=>{
    it('should not change the app query if called with no query', ()=>{
      let oldQuery = app.query;
      app.setQuery('');
      expect(app.query).toEqual(oldQuery);
    })

    it('should change the app query if called with a query', ()=>{
      let oldQuery = app.query;
      app.setQuery('new query');
      expect(app.query).toEqual('new query');
    })
  });

});
