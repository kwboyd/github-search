import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SortMenuComponent } from './components/sort-menu/sort-menu.component';
import { RepoBlockComponent } from './components/repo-block/repo-block.component';

import { QueryService } from './services/query/query.service';
import { RepoColorService } from './services/repo-color/repo-color.service';
import { HeaderService } from './services/header/header.service';

import { ToLocalePipe } from './pipes/to-locale/to-locale.pipe';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SortMenuComponent,
    RepoBlockComponent,
    ToLocalePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    QueryService,
    RepoColorService,
    HeaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
