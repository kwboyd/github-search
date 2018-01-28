import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SortmenuComponent } from './components/sortmenu/sortmenu.component';

import { QueryService } from './services/query/query.service';
import { RepocolorService } from './services/repocolor/repocolor.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    SortmenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    QueryService,
    RepocolorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
