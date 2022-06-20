import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    // Se o tojen for vazio, será necessário fazer o login novamente
    if(environment.token == ''){
      // alert('Sua seção expirou, faça o login novamente.')
      // Redireciona o usuario para a página "entrar"
      this.router.navigate(['/entrar'])
    }
  }

}
