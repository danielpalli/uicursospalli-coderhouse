import { ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.scss']
})
export class InscripcionComponent implements OnInit, OnDestroy {

  constructor(private dashboardService: DashboardService) { }
  ngOnDestroy(): void {
      this.dashboardService.borrarTodo();
  }
  ngOnInit(): void {
  }

}
