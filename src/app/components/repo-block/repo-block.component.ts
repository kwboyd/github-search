import { Component, Input, trigger, transition, animate, style } from '@angular/core';
import { Repo } from '../../interfaces/repo';

@Component({
  selector: 'repo-block',
  templateUrl: './repo-block.component.html',
  styleUrls: ['./repo-block.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ opacity: 0}),
          animate('400ms', style({ opacity: 1}))
        ])
      ]
    )
  ]
})
export class RepoBlockComponent {
  @Input() repo: Repo;

  constructor() { }

}
