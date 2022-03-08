import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtenteComponent } from './utente.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarModule } from '../shared/sidebar/sidebar.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';


const routes: Routes = [
  { path: '', component: UtenteComponent }
]
@NgModule({
  declarations: [UtenteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
    SidebarModule,
    MatToolbarModule,
    MatSidenavModule
  ]
})
export class UtenteModule { }
