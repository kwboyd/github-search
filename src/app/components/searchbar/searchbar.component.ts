import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../services/query.service';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  query: string;

  constructor(public queryService: QueryService) { }

  ngOnInit() {
  }

  enterSearch() {
    this.queryService.search(this.query);
  }

}