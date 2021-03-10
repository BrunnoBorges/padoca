import { Injectable } from '@angular/core';
import { UserLogin, UserRegister } from '../models/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userAutenticator: boolean ;

  constructor(private router: Router) { 
    this.userAutenticator = false;
  }


  fazerLogin(user: UserLogin) {
    if(user.email === 'obrunnodiego@gmail.com' && user.senha === '12345') {
      this.userAutenticator = true;
      this.router.navigate(['home']);
    } else [
      this.userAutenticator = false
    ]
  }

  fazerCadastro(register: UserRegister) {

  }
}
