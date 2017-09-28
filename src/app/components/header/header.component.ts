import * as firebase from 'firebase/app';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Input() user: firebase.User

    constructor() {
        
    }
}
