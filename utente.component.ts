import { Component, OnInit } from '@angular/core';
import { AuthData, AuthService } from "../auth.service";
@Component({

  template: `
  <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' rel='stylesheet'integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3' crossorigin='anonymous'><script src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js' integrity='sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB' crossorigin='anonymous'></script><script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js' integrity='sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13' crossorigin='anonymous'></script>
  <mat-drawer-container class="example-container">
   <mat-drawer #drawer mode="side" opened>
<app-sidebar></app-sidebar>

 </mat-drawer>
    <mat-drawer-content>
    <p>
  <mat-toolbar color="warn">
    <span><h1>Utente</h1></span>

  </mat-toolbar>
</p>
    <div class="text-center" id="utentePagina">
   <p>Nome: {{utenteVero.user.nome}}</p>
   <p>Email: {{utenteVero.user.email}}</p>
 </div>

  </mat-drawer-content>
  </mat-drawer-container>
  `,
  styles: [
  ]
})
export class UtenteComponent implements OnInit {
  utente!: any;
  utenteVero!: AuthData;
  nome!:string
  constructor() { }

  ngOnInit(): void {
    this.utente = window.localStorage.getItem('user')
    console.log(this.utente);
this.utenteVero=JSON.parse(this.utente);
console.log(this.utenteVero.user)

  }

}
