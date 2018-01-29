import { Component, EventEmitter, Output, Input } from '@angular/core';
import { QueryService } from '../../services/query/query.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  query: string;

  @Input() loading: boolean;

  @Output() enter: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    public queryService: QueryService
  ) { }

  enterSearch() {
    // triggered by pressing the search button or pressing enter
    // emits event containing the query
    this.enter.emit(this.query);
  }

}
