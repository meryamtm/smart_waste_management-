import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app/app.component';

const routes: Routes = [

  { path: '', redirectTo: '/auth', pathMatch: 'full' }, // Redirect to /auth by default
  { path: 'auth', component: LoginComponent },
  { path: 'info', component: AppComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
