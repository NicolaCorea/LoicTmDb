import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class LogInServiceProvider {

  username: string = 'admin';
  password: string = 'admin';
  isLogged: boolean = false;
  logged = new EventEmitter<boolean>();

  constructor() {
    console.log('Hello LogInServiceProvider Provider');
  }

  logIn(usr:string, pwd:string) {

    if(usr == this.username && pwd == this.password){
      
      this.isLogged = true;
      console.log('user logged in ' + this.isLogged)
      this.logged.emit(this.isLogged);
      
      return true;

    }else {

      console.log('wrong username or password');
      
      return false;

    }

  }

  logOut() {

    this.isLogged = false;
    
    console.log('user logged out: ' + this.isLogged)
    this.logged.emit(this.isLogged);
    
    alert('logOut Successfull');

  }

}
