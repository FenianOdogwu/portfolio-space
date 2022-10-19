import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { aboutBodyReducer } from './about.reducer';
import { aboutHeaderReducer } from './about.reducer';


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
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ header: aboutHeaderReducer, message: aboutBodyReducer}),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
