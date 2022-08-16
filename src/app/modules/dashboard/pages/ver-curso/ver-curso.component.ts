import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import Curso from 'src/app/core/interfaces/cursos.interface';
import { AppState } from 'src/app/store/app.reducers';
import { cargarCurso } from 'src/app/store/cursoStore/curso.actions';

@Component({
  selector: 'app-ver-curso',
  templateUrl: './ver-curso.component.html',
  styleUrls: ['./ver-curso.component.scss'],
})
export class VerCursoComponent implements OnInit, OnDestroy {
  curso?: Curso | any;
  cursoSubscription?: Subscription;
  routerSubscription?: Subscription;
  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.cursoSubscription = this.store
      .select('curso')
      .subscribe(({curso} ) => {
        this.curso = curso;
      });

    this.routerSubscription = this.router.params.subscribe(({ id }) => {
      this.store.dispatch(cargarCurso({ id }));
    });
  }
  ngOnDestroy() {
    this.cursoSubscription?.unsubscribe();
    this.routerSubscription?.unsubscribe();
  }
}
