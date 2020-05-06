import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiHttpService  } from './api-http.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,  
    HttpClientModule
  ],
  providers: [ApiHttpService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
