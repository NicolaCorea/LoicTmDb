import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/Rx';

@Injectable()
export class HttpClientServiceProvider {

  apiKey: string = 'c4d79d0d1e50bf8bc86b7afbd240e4df';

  constructor(public http: Http) {
    console.log('Hello Http Client Service Provider is ready to fire');
  }

  //GET http that return a list of the most popular movies
  getPopularMovies(){
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key='+
    this.apiKey+'&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
    .map(res=> res.json());
  }

  //returns the information on a particular movie using it's ID
  getMovie(id){

    return this.http.get('https://api.themoviedb.org/3/movie/'+id+'?api_key='+this.apiKey+
    '&language=en-US')
                        .map(res=>res.json());

  }

}
