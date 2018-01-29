import { Component, Input, trigger, transition, animate, style } from '@angular/core';
import { Repo } from '../../interfaces/repo';
import { RepoColorService } from '../../services/repo-color/repo-color.service';

@Component({
  selector: 'repo-block',
  templateUrl: './repo-block.component.html',
  styleUrls: ['./repo-block.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ opacity: 0}),
          animate('500ms', style({ opacity: 1}))
        ])
      ]
    )
  ]
})
export class RepoBlockComponent {
  @Input() repo: Repo;

  constructor(public repoColorService: RepoColorService) { }

  getColor(language) {
    let color = this.repoColorService.getColor(language);
    if (!language) {
      // if no language, don't want a background
      return 'transparent';
    } else if (color) {
      // return the color associated with the language
      return color;
    } else {
      // if no color associated with language, default to dark blue
      return '#3176a5';
    }
  }
}
