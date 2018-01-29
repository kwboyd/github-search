import { Component, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-menu',
  templateUrl: './sort-menu.component.html',
  styleUrls: ['./sort-menu.component.scss']
})
export class SortMenuComponent {
  showSortBox: boolean = false;
  clickedWithin: boolean = false;

  @Input() sortBy: string;
  @Output() switch: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  toggleSortBox() {
    this.showSortBox = true;
  }

  switchSort(sortType: string) {
    this.switch.emit(sortType);
    this.showSortBox = false;
  }

  @HostListener('click')
  clickInside() {
    // if the user clicks within the sort menu, set clickedWithin to true so that clickOutside() doesn't hide the menu
    this.clickedWithin = true;
  }

  @HostListener('document:click')
  clickOutside() {
    // if the user clicks anywhere outside the sort menu, hide the menu
    if (!this.clickedWithin) {
      this.showSortBox = false;
    }
    this.clickedWithin = false;
  }

}
