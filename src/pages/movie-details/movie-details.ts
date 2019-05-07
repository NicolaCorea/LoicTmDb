import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular'; //import the Nave 
import { HttpClientServiceProvider } from '../../providers/http-client-service/http-client-service';;



@IonicPage()
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
})
export class MovieDetailsPage {

  movie:any[]=[];


  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public httpClient: HttpClientServiceProvider, 
              public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {

    this.httpClient.getMovie(this.navParams.get('id'))
.subscribe(movie => {


  console.log(movie)
  this.movie = movie;
})
    console.log('ionViewDidLoad MovieDetailsPage');
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
