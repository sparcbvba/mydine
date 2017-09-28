import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;
  pages: FirebaseListObservable<any[]>;
  restos: any[];
  restoVal: string = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.pages = af.list('/pages', {
      query: {
        limitToLast: 50
      }
    });
    this.user = this.afAuth.authState;

  }

  login() {
    this.afAuth.auth.signInAnonymously();
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  Send(name: string, list: any) {
    // this.af.object('/pages/' + list.$key)
    //   .update({
    //     name: list.content,
    //     restos: list.restos == undefined ? [{name: name}] : list.restos
    //   });

    // //list.restos.push({ name: name });
    // this.restoVal = '';
  }

  getSectionClass(i) {
    switch (i) {
      case 0:
        return 'one';
      case 1:
        return 'two';
      case 2:
        return 'three';
      case 3:
        return 'four';
    }
  }


  toggleMenu() {
    document.getElementsByClassName('wrapper')[0].classList.toggle('menu-open');
  }

  goToPage(page) {
    page += 1;
    let wrapper = document.getElementsByClassName('wrapper')[0];
    let sections = document.getElementsByTagName('section');
    for (let i = 0; i < sections.length; i++) {
      sections[i].classList.remove('before', 'after');
      if (i > page) {
        sections[i].classList.add('after');
      }
    }
    wrapper.classList.remove('menu-open', 'page-one', 'page-two');
    wrapper.classList.add('page-' + this.pages[page]);
  }
}
