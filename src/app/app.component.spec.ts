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

const MockQueryService = {
}

const MockHeaderService = {

}

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
        {provide: QueryService, useValue: MockQueryService},
        {provide: HeaderService, useValue: MockHeaderService}
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
