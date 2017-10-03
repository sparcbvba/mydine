import { DatabaseService } from './../../../services/database.service';
import { YelpService } from './../../../services/yelp.service';
import { ILinkedResto } from './../../../models/linkedResto';
import { IResto } from './../../../models/resto';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as _ from 'lodash';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-resto-detail',
    templateUrl: './resto.component.html',
    styleUrls: ['./resto.component.css']
})
export class RestoComponent implements OnInit {

    item: any;

    constructor(private route: ActivatedRoute, private db: DatabaseService) {
    }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.db.getRestaurantByKey(id).valueChanges().subscribe(item => {
            this.item = item;
        });
    }
}
