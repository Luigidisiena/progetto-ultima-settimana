import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-sidebar',
  template: `
    <ul>
      <li id="menu">
        Menu
      </li>
      <li routerLink="/movie"><a>Film</a></li>
      <li routerLink="/utente"><a>Utente</a></li>
      <li><a (click)="logout()">Logout</a></li>
    </ul>
  `,
  styles: [

  ]
})
export class SidebarComponent implements OnInit {

  constructor(private authSrv:AuthService) { }

  ngOnInit(): void {
  }
  logout() {
    this.authSrv.logout();
  }

}
