import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { IPage } from './../models/pages';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
    constructor(private afAuth: AngularFireAuth) {
    }

    public getAuthState(): Observable<firebase.User> {
        return this.afAuth.authState;
    }

    public login() {
        this.afAuth.auth.signInAnonymously();
    }

    public logout() {
        this.afAuth.auth.signOut();
    }
}
