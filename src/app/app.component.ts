import { Component } from '@angular/core';
import { ApiHttpService } from './api-http.service';

export interface Usuario {
  nome: string;
  email: string;
  senha: string; 
  time: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'HttpClass';
  user: any;
  userSearch = 'ramonbhb';
  login: string;
  usuario: Usuario = {} as Usuario;
  Futebol: string[] = [
    'Cruzeiro',
    'Atlético',
    'Corinthians'
  ];

  constructor (private apiHttp: ApiHttpService) { }  

  async ngOnInit() {
    this.user = await this.apiHttp.getUser(this.userSearch);
    await this.apiHttp.insertComent();
    this.login = this.user.login;    
  }

  onSubmit(form) {
    console.log(form.value);   
  }
}
