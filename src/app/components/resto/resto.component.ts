import { YelpService } from './../../../services/yelp.service';
import { ILinkedResto } from './../../../models/linkedResto';
import { IResto } from './../../../models/resto';
import { Component, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'app-resto-detail',
    templateUrl: './resto.component.html',
    styleUrls: ['./resto.component.css']
})
export class RestoComponent {

    constructor() {
    }
}
