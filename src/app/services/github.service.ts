
import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username = 'ddiasfront';
    private client_id = 'da7d7d14728e0da771ab';
    private client_secret='452ed77539dcb3e26d4fc29ef6294e77d8642a05';
    
    constructor(private _http:Http){
        console.log('Github Service Init...');
    }

    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username)
            .map(res => res.json());
    }
}