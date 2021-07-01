import { Component } from '@angular/core';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

@NgModule({
  imports: [NgbPaginationModule, NgbAlertModule],
})
export class AppComponent {
  title = 'Artificial Intelligence (A.I.) Conjointment';
}
