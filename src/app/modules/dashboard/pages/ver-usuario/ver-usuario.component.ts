import { Component, OnDestroy, OnInit } from '@angular/core';
import Usuario from 'src/app/core/interfaces/usuarios.interface';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { cargarUsuario } from 'src/app/store/usuarioStore/usuario.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ver-usuario',
  templateUrl: './ver-usuario.component.html',
  styleUrls: ['./ver-usuario.component.scss'],
})
export class VerUsuarioComponent implements OnInit, OnDestroy {
  usuario?: Usuario | any;
  usuarioSubscription?: Subscription;
  routerSubscription?: Subscription;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.usuarioSubscription = this.store
      .select('usuario')
      .subscribe(({ user }) => {
        this.usuario = user;
      });

    this.routerSubscription = this.router.params.subscribe(({ id }) => {
      this.store.dispatch(cargarUsuario({ id }));
    });
  }
  ngOnDestroy() {
    this.usuarioSubscription?.unsubscribe();
    this.routerSubscription?.unsubscribe();
  }
}
