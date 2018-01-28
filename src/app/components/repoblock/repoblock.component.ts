import { Component, Input } from '@angular/core';
import { Repo } from '../../interfaces/repo';

@Component({
  selector: 'repoblock',
  templateUrl: './repoblock.component.html',
  styleUrls: ['./repoblock.component.scss']
})
export class RepoblockComponent {
  @Input() repo: Repo;

  constructor() { }

}
