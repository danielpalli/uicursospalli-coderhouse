import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Usuario from 'src/app/core/interfaces/usuarios.interface';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import Swal from 'sweetalert2';
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class Listado implements OnInit, OnDestroy {
  usuario!: Usuario[];
  user!: Usuario;

  displayedColumns: string[] = [
    'id',
    'nombre',
    'apellido',
    'direccion',
    'telefono',
    'perfil',
    'email',
    'acciones',
  ];

  constructor(private authService: AuthService, public dialog: MatDialog) {}

  ngOnDestroy(): void {
    this.usuario = [];
  }
  respuesta: boolean = false;

  ngOnInit(): void {
    if (this.authService.role === 'Admin') {
      this.respuesta = true;
    }
    this.authService.obternerUsuarios().subscribe((usuarios: Usuario[]) => {
      usuarios = Object.values(usuarios[1]);
      this.usuario = usuarios;
    });
  }

  editarUsuario(usuario: Usuario) {
    const dialogRef = this.dialog.open(EditarUsuarioComponent, {
      data: usuario,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.authService.actualizarUsuario(result).subscribe(() => {
          Swal.fire(
            'Actualizado!',
            `${result.nombre} ha sido actualizado`,
            'success'
          );
          this.authService
            .obternerUsuarios()
            .subscribe((usuarios: Usuario[]) => {
              usuarios = Object.values(usuarios[1]);
              this.usuario = usuarios;
            });
        });
      }
    });
  }
  eliminarUsuario(usuario: Usuario) {
    if (usuario._id === this.authService.usuario._id) {
      Swal.fire('Error', 'No puedes eliminar tu propio usuario', 'error');
      return;
    }

    Swal.fire({
      title: '¿Borrar usuario?',
      text: `Esta a punto de borrar a ${usuario.nombre}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrarlo!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.eliminarUsuario(usuario).subscribe(() => {
          Swal.fire('Borrado!', `${usuario.nombre} ha sido borrado`, 'success');
          this.authService
            .obternerUsuarios()
            .subscribe((usuarios: Usuario[]) => {
              usuarios = Object.values(usuarios[1]);
              this.usuario = usuarios;
            });
        });
      }
    });
  }

  buscarUsuario(usuario: Usuario) {

    const id = usuario._id;
    this.authService.buscarUsuario(id!.toString()).subscribe((usuario: Usuario) => {

      this.user = Object.values(usuario)[1];
      console.log(this.user);
    });
  }

}
