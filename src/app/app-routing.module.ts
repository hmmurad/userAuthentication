import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  { path: '',  component: HomeComponent},
  { path: 'sign-up',  component: SignUpComponent},
  { path: 'login',  component: LoginComponent},
  { path: 'about',  component: AboutComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
