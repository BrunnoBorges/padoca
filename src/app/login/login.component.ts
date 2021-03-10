import { Component, OnInit } from '@angular/core';
import { UserLogin, UserRegister } from './usuario';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserLogin;
  register: UserRegister;

  constructor(private authService: AuthService) {
    this.user =  new UserLogin();
    this.register = new UserRegister();
   }

  ngOnInit(): void {
  }

  loginUser() {
    console.log('--> Logou <--', this.user);
    this.authService.fazerLogin(this.user);
  }

  registerUser() {
    console.log('--> Cadastrou <--');
    // this.authService.fazerCadastro(this.register);
  }
}
