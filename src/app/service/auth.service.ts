import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

  /*Método entrar*/
  entrar(userLogin:UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', userLogin)
  }

  /*Método cadastrar*/
  cadastrar(user:User): Observable<User>{
    return this.http.post<User>('http://localhost:8080/ususarios/cadastrar', user)
  }
}
