import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(){
     // Se o tojen for vazio, será necessário fazer o login novamente
     if(environment.token == ''){
      // Redireciona o usuario para a página "entrar"
      this.router.navigate(['/entrar'])
    }
  }

}
