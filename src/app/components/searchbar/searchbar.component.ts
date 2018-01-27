import { Component, EventEmitter, Output } from '@angular/core';
import { QueryService } from '../../services/query/query.service';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  query: string;
  items: any;

  @Output()
  enter: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    public queryService: QueryService
  ) { }

  enterSearch() {
    console.log('enter search');
    this.enter.emit(this.query);
  }

}
