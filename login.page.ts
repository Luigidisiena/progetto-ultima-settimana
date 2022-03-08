import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  template: `
<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' rel='stylesheet'integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3' crossorigin='anonymous'><script src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js' integrity='sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB' crossorigin='anonymous'></script><script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js' integrity='sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13' crossorigin='anonymous'></script>

  <div class="sfondo" >
    <div id="loginQuad"class="text-center bg-dark">
      <h2>FlixNet</h2>
         <div class="row justify-content-center">
              <div class="col-6">
                <form #f="ngForm" (ngSubmit)="submit(f)">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input ngModel name="email" class="form-control" type="email" id="email" />
                  </div>
                  <div class="form-group">
                    <label for="pass">Password</label>
                    <input ngModel name="password" class="form-control" type="password" id="pass" />
                  </div>
                  <button  class="btn btn-secondary mt-3" [disabled]="false" type="submit" >Entra
                  </button>
                  <button class="btn btn-secondary mt-3" type="button" routerLink="/register">Registrati</button>
                </form>
              </div>
            </div>
  </div>
  </div>
  `,
  styles: [
    `
  html{
    background-color:grey;
  }

    `
  ],
})
export class loginPage implements OnInit {

  isLoading = false
  errorMessage = undefined
  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async submit(form: any) {
    try {
      await this.authSrv.login(form.value).toPromise()
      form.reset()
      this.errorMessage = undefined;
      this.router.navigateByUrl('/movie');
    } catch (error: any) {
      this.errorMessage = error
      console.error(error)
    }
  }
}
