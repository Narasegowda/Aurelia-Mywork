
import {PLATFORM} from 'aurelia-pal';
export class App{  
  constructor() {
     this.header = 'This is Header';
     this.content = 'This is content';
     this.user=[
       {
        name:"fsdf"
       }
     ]
     this.users=[
       {
       name:"Narasegowda",
       age:26
       },
       {
        name:"Ravi",
        age:35
       }
     ]
  }
  configureRouter(config,router)
  {
    this.router=router;
    config.title="UserApp";
    config.map([
      {route:'',name:'home',moduleId:PLATFORM.moduleName('./pages/home/home'),title:'Home'},
      {route:'about',name:'about',moduleId:PLATFORM.moduleName('./pages/about/about'),title:'About'}
    ])
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
    name:name,
    age:age
  });
}
}