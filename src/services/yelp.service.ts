import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class YelpService {
    constructor(private http: Http) {
    }

    public authenticate() {
        const body = new URLSearchParams();
        body.set('grant_type', 'client_credentials');
        body.set('client_id', 'PRjzOf4tdF06Iuscq0bU8Q');
        body.set('client_secret', 'kH6X0ilqX3Y3Dd1y9cQdukjnTPegW9XOzFNXe64HZCzWHfIPb6zjwsJITsQCHHh8');

        this.http.post('https://api.yelp.com/oauth2/token', body).subscribe(data => {
            console.log(data);
        });
    }

}
