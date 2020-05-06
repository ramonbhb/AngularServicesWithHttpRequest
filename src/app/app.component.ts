import { Component } from '@angular/core';
import { ApiHttpService } from './api-http.service';

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

  constructor (private apiHttp: ApiHttpService) { }  

  async ngOnInit() {
    this.user = await this.apiHttp.getUser(this.userSearch);
    await this.apiHttp.insertComent();
    this.login = this.user.login;    
  }
}
