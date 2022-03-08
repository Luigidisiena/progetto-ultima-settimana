import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { AuthData } from './auth.service';


export interface MovieData {
  backdrop_path: string;
  id: number;
  poster_path: string;
  title: string;
  video: boolean;
  fav: boolean;
}
export interface Favoriti {
  [x: string]: any;
  movieId: number;
  userId: number;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  favoriti!: Favoriti[];
  filmsJSON!: any;
  filmsOrigin!: MovieData[];
  fav!: any
  idUtente!: any;
  idUtenteVero!: AuthData;


  constructor(private http: HttpClient) { }
  getMovies() {
    return this.http.get(`http://localhost:4201/movies-popular`).subscribe(res => {
      console.log(res);
      this.filmsJSON = res;
      this.filmsOrigin = this.filmsJSON;
    });
  }

  preferiti(data: any, film: MovieData) {


    film["video"] = true;
    return this.http.post(`http://localhost:4201/favorites`, data).subscribe(res => {
      console.log("aggiunto " + res);
      this.getFavorites();
      console.log(this.favoriti);
    });
  }
  cancPreferiti(film: MovieData) {
    let i = 0;
    let id: any;
    for (i; i < this.favoriti.length; i++) {
      if (this.favoriti[i].movieId == film.id) {
        console.log(this.favoriti[i]);

        id = this.favoriti[i].id;
        film["video"] = false;
      }
    }
    return this.http.delete(`http://localhost:4201/favorites/${id}`).subscribe(res => {
      console.log(res);
      this.getFavorites();
    });
  }

  getFavorites() {
    this.idUtente = window.localStorage.getItem('user');
    this.idUtenteVero = JSON.parse(this.idUtente)

    return this.http.get('http://localhost:4201/favorites?userId=' + this.idUtenteVero.user.id).subscribe(res => {
      this.fav = res;
      this.favoriti = this.fav
      for (let i = 0; i < this.favoriti.length; i++) {
        for (let o = 0; o < this.filmsOrigin.length; o++) {
          if (this.favoriti[i].movieId == this.filmsOrigin[o].id) {
            this.filmsOrigin[o]["video"] = true;
          }
        }
      }
    })
  }
}
