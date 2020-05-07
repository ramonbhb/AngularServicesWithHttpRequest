import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiHttpService  } from './api-http.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,  
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [ApiHttpService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
