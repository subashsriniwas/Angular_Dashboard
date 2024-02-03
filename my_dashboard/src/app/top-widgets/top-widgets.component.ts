import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCodeBranch, faLocation,faDiagramProject, faPeopleGroup, faHouse} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './top-widgets.component.html',
  styleUrl: './top-widgets.component.scss'
})
export class TopWidgetsComponent {
  faCoffee = faLocation;
  faBranch = faHouse;
  faDiagramProject =faDiagramProject;
  faPeopleGroup = faPeopleGroup;
}
