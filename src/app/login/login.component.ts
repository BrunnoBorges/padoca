import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from './usuario';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioLogin;

  constructor(private authService: AuthService) {
    this.usuario =  new UsuarioLogin();
   }

  ngOnInit(): void {
  }

  login() {
    console.log('--> Logou <--', this.usuario);
    this.authService.fazerLogin(this.usuario);
  }

  register() {
    console.log('--> Cadastrou <--');
  }
}
