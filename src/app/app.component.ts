import { Component } from '@angular/core';
import {routes} from "./helpers/routes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  routes: Array<any> = routes;
}
