import { Component, ViewChild } from '@angular/core';

import { Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LogInServiceProvider } from '../providers/log-in-service/log-in-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';

  pages: Array<{title: string, component: any}>;

  userLoggedIn: boolean = false;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public modalCtrl:ModalController,
              public logIn: LogInServiceProvider) {
    
    this.initializeApp();

    this.ListenlogIn();
    


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'HomePage' },
      //{ title: 'Favorite', component: 'FavoritePage' }
    ];

  }
  
  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
  }

  /* ***************************************NAVIGATION*************************************** */

  openPage(page) {

    this.nav.setRoot(page.component);

  }

  openPageOfFavoutite() {

    this.nav.setRoot('FavoritePage');

  }

  /* ***************************************AUTENTICATION*************************************** */

  launchLogInPage(){

    let movieModal = this.modalCtrl.create('LogInPage');

    movieModal.present();

  }

  ListenlogIn(){
    this.logIn.logged.subscribe(res => {
      this.userLoggedIn = res;
      console.log(res);

    });
  }

  logOut() {
    this.logIn.logOut();
    this.logIn.logged.subscribe(res => {
      this.userLoggedIn = res;
      console.log(res);

    });
  }

  /* ***************************************!!!!!!!!!!!!!!!!!*************************************** */

}
