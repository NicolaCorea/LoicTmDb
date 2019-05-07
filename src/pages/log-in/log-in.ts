import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { LogInServiceProvider } from '../../providers/log-in-service/log-in-service';


@IonicPage()
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl:ViewController,
              public logInService: LogInServiceProvider
              /*public myApp: MyApp*/) {
  }

  LogIn(usr: string, pwd: string){
    
    //setTimeout(function(){
    //  let logged = this.logInService.logIn(usr, pwd)
    //;}, 3000);

    let logged = this.logInService.logIn(usr, pwd);
    
    if(logged) {
       
      this.dismiss();
    
    }else{
      
        alert('Wrong');

    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
