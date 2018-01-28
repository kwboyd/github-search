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
  sortBy: string = 'relevance';

  constructor(public queryService: QueryService) {}

  search(query) {
    this.queryService.search(query, this.sortBy)
      .subscribe(res => {
        console.log(res);
        this.repoCount = res["total_count"];
        this.repos = res["items"];
        this.resultsLoaded = true;
      });
  }
}
