import { RestoComponent } from './components/resto/resto.component';
import { YelpService } from './../services/yelp.service';
import { PageService } from './components/pages/page.service';
import { DatabaseService } from './../services/database.service';
import { PagesComponent } from './components/pages/pages.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { OrderModule } from 'ngx-order-pipe';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

export const firebaseConfig = {
  apiKey: 'AIzaSyBw-a4mh06bV4oX-0b18jB-oXUZNWuLsso',
  authDomain: 'my-dine.firebaseapp.com',
  databaseURL: 'https://my-dine.firebaseio.com',
  storageBucket: 'my-dine.appspot.com',
  messagingSenderId: '630871012094'
};

const appRoutes: Routes = [
  { path: 'resto/:id',      component: RestoComponent },
  {
    path: 'lists',
    component: PagesComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/lists',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PagesComponent,
    RestoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFontAwesomeModule,
    OrderModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    DatabaseService,
    PageService,
    YelpService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
