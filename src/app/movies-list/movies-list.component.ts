import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { UsersService } from '../clean-nav/login/users.service';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  // MatPaginator Inputs
  length = 1000;
  pageSize = 20;
  currentPage = 1;

  loadedMovies: Movie[] = [];
  isFirstTime = true;
  isLoading = false;
  error!: Subject<string>;
  constructor(private http: HttpClient, private usersService: UsersService) {}

  ngOnInit() {
    if (this.usersService.signedInUser) {
      if (this.isFirstTime) {
        this.isFirstTime = false;
      }
      this.isLoading = true;
      this.http
        .get<Movie>('https://api.themoviedb.org/3/movie/top_rated', {
          params: new HttpParams()
            .set('api_key', 'a8bd7f3d0cff0c86e330f635ea81ce95')
            .set('page', this.currentPage),
        })
        .subscribe(
          (response) => {
            this.loadedMovies = response['results'];
            this.isLoading = false;
          },
          (error) => {
            this.error = error;
          }
        );
    }
  }

  onPageFlip(pageEvent: PageEvent) {
    this.currentPage = pageEvent.pageIndex + 1;
    this.ngOnInit();
  }
}
