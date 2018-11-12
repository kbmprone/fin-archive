import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NumerisationComponent } from './numerisation/numerisation.component';
import { AdministrationComponent } from './administration/administration.component';
import { DatabaseComponent } from './database/database.component';
import { FileUploadsComponent } from './file-uploads/file-uploads.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    NumerisationComponent,
    AdministrationComponent,
    DatabaseComponent,
    FileUploadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
