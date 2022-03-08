import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import { Router } from '@angular/router';

export interface AuthData {
  accessToken: string;
  user: {
    nome: string;
    email: string;
    password: string;
    id:number
  };
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData!:any;
  user:any;
  isLogged: boolean = false;
  autologoutTimer: any
  jwtHelper = new JwtHelperService();
  url = "http://localhost:4201";
  private authsubj = new BehaviorSubject<null | AuthData>(null)
  user$ = this.authsubj.asObservable()
  isLogged$ = this.user$.pipe(map(user => !!user))

  constructor(private http: HttpClient, private router: Router) { }


  register(data: { email: string; password: string }) {
    return this.http.post<AuthData>(`http://localhost:4201/register`, data).pipe(
      tap((data) => {
        console.log(data);
        this.authsubj.next(data);
        localStorage.setItem('user', JSON.stringify(data))
        this.autoLogout(data);
      }),
      catchError(this.errors)
    );
  }
  login(data: { email: string; password: string }) {
    return this.http.post<AuthData>(`http://localhost:4201/login`, data).pipe(
      tap((data) => {
        console.log(data);
        this.authsubj.next(data);
        localStorage.setItem('user', JSON.stringify(data))
        this.autoLogout(data);
        this.isLogged = true;
      })
    );
  }

  autoLogout(data: AuthData) {
    const inizioToken: any = this.jwtHelper.getTokenExpirationDate(data.accessToken) as Date;
    const expMs = inizioToken.getTime() - new Date().getTime();
    this.autologoutTimer = setTimeout(() => {
      this.logout()
    }, expMs);
    this.isLogged = false;
  }

  logout() {
    this.authsubj.next(null)
    this.router.navigate(["/login"])
    localStorage.removeItem('user')
    if (this.autologoutTimer) {
      clearTimeout(this.autologoutTimer)
    }
    this.isLogged = false;
  }

  private errors(err: any) {
    // console.error(err)
    switch (err.error) {
      case "Email and password are required":
        return throwError("Email e password sono obbligatorie");
        break;
      case "Email already exists":
        return throwError("Utente gia registrato");
        break;
      case "Email format is invalid":
        return throwError("Email scritta male");
        break;
      case "Cannot find user":
        return throwError("Utente non esiste");
        break;
      default:
        alert("Errore nella chiamata")
        return throwError("Errore nella chiamata");
        break;
    }
  }
  getUsers(){
    const user = localStorage.getItem('user');
    if (!user) {
      return;
    }
   this.userData = JSON.parse(user);
  }

}
