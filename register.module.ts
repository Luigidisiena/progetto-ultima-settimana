import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { registerPage } from './register.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'register', component:registerPage}
]

@NgModule({
  declarations: [
    registerPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    RouterModule,
  ]
})
export class RegisterModule { }
