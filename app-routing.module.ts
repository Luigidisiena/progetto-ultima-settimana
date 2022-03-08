import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterModule } from './register/register.module';
const routes: Routes= [
  {
    path: "register",
    loadChildren: () => import('./register/register.module').then(m =>
      m.RegisterModule)
  },
  {
    path: "login",
    loadChildren: () => import('./login/login.module').then(m =>
      m.LoginModule)
  },
  {
    path: "movie",
    loadChildren: () => import('./movies/movies.module').then(m =>
      m.MoviesModule)
  },
  {
    path: "utente",
    loadChildren: () => import('./utente/utente.module').then(m =>
      m.UtenteModule)
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({

  imports: [BrowserModule, RouterModule.forRoot(routes),
    RegisterModule],
  exports: [RouterModule],

})
export class AppRoutingModule { }
