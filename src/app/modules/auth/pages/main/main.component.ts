import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routingAnimation } from 'src/app/modules/route-animations';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [routingAnimation],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
