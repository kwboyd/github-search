import { Component, EventEmitter, Output, Input } from '@angular/core';
import { QueryService } from '../../services/query/query.service';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
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
