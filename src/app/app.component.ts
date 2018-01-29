import { Component } from '@angular/core';
import { QueryService } from './services/query/query.service';
import { Repo } from './interfaces/repo';

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

  constructor(public queryService: QueryService) {}

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
    this.loading = true;
    this.error = false;
    this.queryService.search(this.query, this.sortBy)
      .subscribe(res => {
        console.log(res);
        this.repoCount = res["total_count"];
        this.repos = res["items"];
        this.resultsLoaded = true;
        this.loading = false;
      }, error => {
        this.repoCount = 0;
        this.repos = [];
        this.loading = false;
        this.error = true;
      });
  }
}
