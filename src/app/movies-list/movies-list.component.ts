import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { MoviesService } from '../services/movies.service';
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
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    if (this.isFirstTime) {
      this.isFirstTime = false;
    }
    this.isLoading = true;
    this.moviesService.loadMovies(this.currentPage).subscribe(
      (response) => {
        this.loadedMovies = response['results'];
        // console.log('Loaded movies now is: ' + this.loadedMovies);
        this.isLoading = false;
      },
      (error) => {
        this.error = error;
      }
    );
  }

  onPageFlip(pageEvent: PageEvent) {
    this.currentPage = pageEvent.pageIndex + 1;
    this.ngOnInit();
  }
}
