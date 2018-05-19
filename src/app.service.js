import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
@inject(HttpClient)
export class AppService{
    users=[ {
        name:"fsdf",
        age:23
        },
        {
         name:"asd",
         age:45
        }]
    getUsers(){
        return this.http
                        .fetch('https://api.github.com/users')
                        .then(res=>res.json());
    }
    constructor(http){
        this.http=http;
    }
}