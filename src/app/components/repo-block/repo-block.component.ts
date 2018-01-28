import { Component, Input } from '@angular/core';
import { Repo } from '../../interfaces/repo';

@Component({
  selector: 'repo-block',
  templateUrl: './repo-block.component.html',
  styleUrls: ['./repo-block.component.scss']
})
export class RepoBlockComponent {
  @Input() repo: Repo;

  constructor() { }

}
