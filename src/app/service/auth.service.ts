import { Injectable } from '@angular/core';
import { UsuarioLogin } from '../login/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAutenticado: boolean ;

  constructor(private router: Router) { 
    this.usuarioAutenticado = false;
  }


  fazerLogin(usuario: UsuarioLogin) {
    if(usuario.email === 'obrunnodiego@gmail.com' && usuario.senha === '12345') {
      this.usuarioAutenticado = true;
      this.router.navigate(['home']);
    } else [
      this.usuarioAutenticado = false
    ]
  }
}
