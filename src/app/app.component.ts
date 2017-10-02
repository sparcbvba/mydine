import { AuthService } from './../services/auth.service';
import * as firebase from 'firebase/app';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  user: Observable<firebase.User>;
  restos: any[];

  constructor(private authService: AuthService) {
    this.user = this.authService.getAuthState();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
