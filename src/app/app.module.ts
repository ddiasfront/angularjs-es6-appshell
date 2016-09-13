import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GithubComponent } from './components/github.component';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    GithubComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
