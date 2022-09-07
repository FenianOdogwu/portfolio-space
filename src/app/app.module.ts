import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import  { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { EmailFormComponent } from './about-page/email-form/email-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MainPageComponent,
    ProjectPageComponent,
    AboutPageComponent,
    EmailFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
