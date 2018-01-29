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
  page: number;
  nextPage: string;
  prevPage: string;

  constructor(
    public queryService: QueryService,
    public headerService: HeaderService
  ) {}

  setQuery(query: string) {
    // store the query and then search
    // query stored so that if sortBy switches, the query doesn't change
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
    let headerLink = res.headers.get('Link');
    let parsedLink = this.headerService.parseLinkHeader(headerLink);

    // parse response body data
    let body = res.body;
    this.nextPage = parsedLink["next"];
    this.prevPage = parsedLink["prev"];
    this.repoCount = body["total_count"];
    this.repos = body["items"];
    this.resultsLoaded = true;
    this.loading = false;
  }

  handleError() {
    // reset all data and set error
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    this.nextPage = null;
    this.prevPage = null;
    this.repoCount = 0;
    this.repos = [];
    this.loading = false;
    this.error = true;
  }

  switchPage(direction: string) {
    // go to the next or previous page
    this.loading = true;
    var page;
    if (direction === 'next') {
      page = this.nextPage;
    } else if (direction === 'prev') {
      page = this.prevPage;
    }
    this.queryService.changePage(page)
      .subscribe(res => {
        this.parseResults(res);
      }, error => {
        this.handleError();
      });
  }
}
