import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NumerisationComponent } from './numerisation/numerisation.component';
import { AdministrationComponent } from './administration/administration.component';
import { DatabaseComponent } from './database/database.component';
import { FileUploadsComponent } from './file-uploads/file-uploads.component';

const routes: Routes = [
	{path: 'login', component: LoginComponent},
	{path: 'home', component: HomepageComponent},
	{path: 'scan', component: NumerisationComponent},
	{path: 'file-uploads', component: FileUploadsComponent},
	{path: 'admin', component: AdministrationComponent},
	{path: 'database', component: DatabaseComponent},
	{path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
