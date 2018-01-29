import { Component } from '@angular/core';
import { QueryService } from './services/query/query.service';
import { Repo } from './interfaces/repo';
import { HeaderService } from './services/header/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  repoCount: number;
  repos: Repo[];
  resultsLoaded: boolean = false;
  sortBy: string = 'score';
  query: string;
  loading: boolean = false;
  error: boolean = false;
  pages: {next: string, prev: string} = {next: null, prev: null};

  constructor(
    public queryService: QueryService,
    public headerService: HeaderService
  ) {}

  setQuery(query: string) {
    // store the query and then search
    // query stored so that if sortBy switches, the query doesn't change
    if (!query || query.length < 1) {
      // if query does not exist, do not search and do not change query
      return;
    }
    this.query = query;
    this.search();
  }

  setSortBy(sortType: string) {
    // store the sort and then search
    // query stored so that if sortBy switches, the query doesn't change
    this.sortBy = sortType;
    this.search();
  }

  search() {
    // get search results
    this.loading = true;
    this.error = false;
    this.queryService.search(this.query, this.sortBy)
      .subscribe(res => {
        this.parseResults(res);
      }, error => {
        this.handleError();
      });
  }

  parseResults(res) {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    // get the links from the headers and parse them
    const headerLink = res.headers.get('Link');
    const parsedLink = this.headerService.parseLinkHeader(headerLink);
    if (parsedLink) {
      this.pages = {next: parsedLink['next'], prev: parsedLink['prev']};
    } else {
      // if there is no header, parsedLink will be returned as null
      this.pages = {next: null, prev: null};
    }

    // parse response body data
    const body = res.body;
    this.repoCount = body['total_count'];
    this.repos = body['items'];
    this.resultsLoaded = true;
    this.loading = false;
  }

  handleError() {
    // reset all data and set error
    this.resetValues();
    this.loading = false;
    this.error = true;
  }

  resetValues() {
    // resets pages, repoCount, and repos
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    this.pages = {next: null, prev: null};
    this.repoCount = 0;
    this.repos = [];
  }

  switchPage(direction: string) {
    // go to the next or previous page
    // direction should be 'next' or 'prev'
    if (!this.pages[direction]) {
      // if no page in that direction, something has gone wrong
      this.handleError();
      return;
    }
    this.loading = true;
    this.queryService.changePage(this.pages[direction])
      .subscribe(res => {
        this.parseResults(res);
      }, error => {
        this.handleError();
      });
  }
}
