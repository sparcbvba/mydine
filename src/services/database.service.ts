import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { IPage } from './../models/pages';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject  } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class DatabaseService {
    constructor(private af: AngularFireDatabase) {
    }

    public publicList(type: string): any {
        return this.af.list('/' + type);
    }

    public updateObject(type: string, key: string, item: any) {
        this.af.object(type + '/' + key).update(item);
    }

    public getRestaurantByKey(key: string) {
        return this.af.object('restos/' + key);
    }
}
