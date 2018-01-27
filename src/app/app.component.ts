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

  constructor(public queryService: QueryService) {}

  search(query) {
    this.queryService.search(query)
      .subscribe(res => {
        this.repoCount = res["count"];
        this.repos = res["items"];
      });
  }
}
