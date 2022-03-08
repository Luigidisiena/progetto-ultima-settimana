import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { moviePage } from './movie.page';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidebarModule } from '../shared/sidebar/sidebar.module';
const routes: Routes = [
  { path: '', component: moviePage }
]

@NgModule({
  declarations: [moviePage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
    FormsModule,
    MatGridListModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    SidebarModule
  ]
})
export class MoviesModule { }
