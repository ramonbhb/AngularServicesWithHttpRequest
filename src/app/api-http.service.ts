import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ApiHttpService {

  private gitHubUrl = 'https://api.github.com/users/';
  private JsonExample = 'https://jsonplaceholder.typicode.com/posts';
  user: any;  
  postobj = {
    title: 'foo',
    body: 'bar',
    userId: 1
  }

  constructor(private http: HttpClient) { }

  async getUser(user: string) {
    let resposta = await this.http.get(this.gitHubUrl+user).toPromise();
    console.log(resposta);
    return resposta;                                  
  }

  async insertComent() {
    console.log("Inicializando o post");
    let resposta = await this.http.post(this.JsonExample,this.postobj,{observe: 'response'}).toPromise();    
    console.log("Post finalizado");
    console.log(resposta);
    return resposta;
  }
  
}
