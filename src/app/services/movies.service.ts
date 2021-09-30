import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  loadMovies(page: number) {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/top_rated',
      {
        params: new HttpParams()
          .set('api_key', 'a8bd7f3d0cff0c86e330f635ea81ce95')
          .set('page', page),
      }
    );
  }
}
