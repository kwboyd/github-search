import { Component, Input } from '@angular/core';

@Component({
  selector: 'sortmenu',
  templateUrl: './sortmenu.component.html',
  styleUrls: ['./sortmenu.component.scss']
})
export class SortmenuComponent {
  showSortBox: boolean = false;

  @Input() sortBy: string;

  constructor() { }

  toggleSortBox() {
    this.showSortBox = true;
  }

}
