import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User
  confirmarSenha:string
  tipoUsuario:string
  userLogin:UserLogin = new UserLogin

  constructor(
    private authSerice:AuthService,
    private router: Router
  ) { }

  ngOnInit(){

    window.scroll(0,0)
  }

  confirmSenha(event:any){
    this.confirmSenha = event.target.value
  }

  tipoUser(event:any){
    this.tipoUsuario = event.target.value
  }

  cadastrar(){
    /*verifica o tipo d usuario*/
    this.user.tipo = this.tipoUsuario

    if(this.user.senha != this.confirmarSenha){
      alert('As senhas não conferem')
    }
    else{
      this.authSerice.cadastrar(this.user).subscribe((resp: User)=>{
        this.user = resp
        this.router.navigate(['/entrar'])
        alert('Usuario cadastrado com sucesso!!!')
      })
    }
  }

}
