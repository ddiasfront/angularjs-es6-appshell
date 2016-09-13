import { Component } from '@angular/core';
import { GithubService } from './../services/github.service';

@Component({
  selector: 'github',
  templateUrl: './github.component.html',
  providers: [GithubService]
})


export class GithubComponent { 

    user:any;

    constructor(private _githubService:GithubService){
        this._githubService.getUser().subscribe(user => {
            //console.log(user);
            this.user = user;
        });
    }
}
