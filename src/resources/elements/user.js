import {inject} from 'aurelia-framework';
import {AppService} from '../../app.service';
@inject(AppService)
export class user{  
  constructor(AppService) {
    const promise=AppService.getUsers();
    promise.then(res=>{this.users=res;});
  }
debugger; 
  updateContent() {
     this.header = this.message;
     this.content = 'This is NEW content...';
  
  }
  updateContentold() {
    this.header = 'Button Two Clicked';
     this.content = 'This is content';
     alert("Button 2 clicked");
 }
 onslect(usr){
  this.selecteduser=usr;
}
adduser(name,age){
  this.users.push({
    login:name,
    avatar_url:age
  });
}
}

