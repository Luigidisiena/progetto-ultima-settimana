import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { loginPage } from './login.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component:loginPage}
]
@NgModule({
  declarations: [loginPage],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    RouterModule
  ]
})
export class LoginModule { }
