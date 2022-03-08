import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AuthData, AuthService } from "../auth.service";
import { MovieData, MovieService } from "../movie.service";

@Component({
  template: `
<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' rel='stylesheet'integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3' crossorigin='anonymous'><script src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js' integrity='sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB' crossorigin='anonymous'></script><script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js' integrity='sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13' crossorigin='anonymous'></script>

<div class="Movi">
   <mat-drawer-container class="example-container">
   <mat-drawer #drawer mode="side" opened>
<app-sidebar ></app-sidebar>
   </mat-drawer>
    <mat-drawer-content>
    <p>
  <mat-toolbar color="warn">
    <span><h1>Movies</h1></span>

  </mat-toolbar>
</p>
     <mat-grid-list cols="4" rowHeight=" 0.67:1" gutterSize="30px">

     <mat-grid-tile  *ngFor="let film of filmr">
      <img src="http://image.tmdb.org/t/p/w500{{film.poster_path}}" alt="">
      <mat-grid-tile-footer><button #cuore mat-icon-button [disabled]="cliccato"  [color]="film.video ? 'warn' : '' "
        (click)="!film.video ? preferiti(film.id,user.user.id,film) : rimuovi(film)">
          <mat-icon>favorite</mat-icon>
        </button>
       </mat-grid-tile-footer></mat-grid-tile>
  </mat-grid-list>
  </mat-drawer-content>
  </mat-drawer-container>
</div>
  `,
  styles: [],
})
export class moviePage implements OnInit {
  constructor(private movieSrv: MovieService, private authSrv: AuthService) { }
  filmr!: MovieData[];
  titolo!: String;
  user!: AuthData;
  cliccato:boolean=false;

  async filme() {
    this.filmr = this.movieSrv.filmsOrigin;
    this.user = this.authSrv.userData;

  }
  async ngOnInit() {

    this.movieSrv.getMovies();
    this.authSrv.getUsers();
    this.movieSrv.getFavorites();

    setTimeout(() => {
      this.filme();
    }, 1500);
  }
  async preferiti(id: number, utente: number, film: MovieData) {
    this.cliccato=true
    setTimeout(() => {
      this.cliccato=false;
    }, 2000);

    let data = {
      'movieId': id,
      'userId': utente
    }

    this.movieSrv.preferiti(data, film);

  }
  rimuovi(film: MovieData) {
    this.cliccato=true
    setTimeout(() => {
      this.cliccato=false;
    }, 2000);
    this.movieSrv.cancPreferiti(film)
  }

}
