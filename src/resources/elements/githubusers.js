import {inject} from 'aurelia-framework';
import {AppService} from '../../app.service';

@inject(AppService)
export class Githubusers {
 
  constructor(appService){
    this.users=[]
    this.query='';
    this.service=appService;
    this.currentDate = new Date();
  }
  onqueryChange(){
    console.log(this.query);
    this.service.getUsers()
         .then(res=>{
           this.users=res.filter(user=>user.login.includes(this.query));
         })
  }
}

