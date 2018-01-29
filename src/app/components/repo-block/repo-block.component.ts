import { Component, Input } from '@angular/core';
import { Repo } from '../../interfaces/repo';
import { RepoColorService } from '../../services/repo-color/repo-color.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-repo-block',
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
    const color = this.repoColorService.getColor(language);
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
