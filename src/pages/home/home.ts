import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { HttpClientServiceProvider } from '../../providers/http-client-service/http-client-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movies: any[] = [];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public modalCtrl:ModalController,
     public httpClient: HttpClientServiceProvider) {}

  ionViewDidLoad() {

    //call the getPopularMovies function from the movie service
    this.httpClient.getPopularMovies()
    .subscribe(res => {

      console.log(res.results);

      //store the response on our empty array
      this.movies = res.results;

    });

    console.log('ionViewDidLoad HomePage');
  }

  //Use the Modal Contoller to launch the movie details page and pass the movie object for the movie chosen by the User
  launchMovieDetailsPage(movie){

     let movieModal = this.modalCtrl.create('MovieDetailsPage', movie);
 
     movieModal.present();
 
   }

}
