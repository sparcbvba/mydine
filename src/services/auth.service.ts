import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { IPage } from './../models/pages';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
    private user: firebase.User;

    constructor(private afAuth: AngularFireAuth) {
        afAuth.authState.subscribe(user => {
            if (!user) {
              this.user = null;
              return;
            }
            this.user = user;
          });
    }

    public getUser(): firebase.User {
        return this.user;
    }

    public getAuthState(): Observable<firebase.User> {
        return this.afAuth.authState;
    }

    public login() {
        this.afAuth.auth.signInAnonymously();
    }

    public signInWithFacebook() {
        this.afAuth.auth
            .signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then(res => console.log(res));
    }

    public logout() {
        this.afAuth.auth.signOut();
    }
}
