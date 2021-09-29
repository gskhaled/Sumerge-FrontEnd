import { HttpClientModule } from '@angular/common/http';
import { fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { of } from 'rxjs';
import { MoviesService } from '../services/movies.service';
import { Movie } from './movie.model';
import { MoviesListComponent } from './movies-list.component';

describe('Component: MoviesList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesListComponent],
      providers: [MoviesService],
      imports: [HttpClientModule, MatPaginatorModule],
    }).compileComponents();
  });

  it('Should create the component', fakeAsync(() => {
    let fixture = TestBed.createComponent(MoviesListComponent);
    let app = fixture.debugElement.componentInstance;
    tick();
    expect(app).toBeTruthy();
  }));

  it('Testing fake async waiting for movies to load', fakeAsync(() => {
    let fixture = TestBed.createComponent(MoviesListComponent);
    let app = fixture.debugElement.componentInstance;
    let movieService = fixture.debugElement.injector.get(MoviesService);

    let testMovie = new Movie(
      false,
      '/testPath.jpg',
      [1, 2, 3],
      123,
      'Test',
      'Test Title!',
      'Very test overvieewwww',
      420,
      '/test.jpg',
      '1998-09-02',
      'Testt',
      false,
      10.2,
      1234
    );
    spyOn(movieService, 'loadMovies').and.returnValue(
      of({
        results: [testMovie],
      })
    );
    fixture.detectChanges();
    tick();
    expect(app.loadedMovies).not.toHaveSize(0);
  }));

  it('Testing if test movie actually loads into component correctly', fakeAsync(() => {
    let fixture = TestBed.createComponent(MoviesListComponent);
    let app = fixture.debugElement.componentInstance;
    let movieService = fixture.debugElement.injector.get(MoviesService);

    let testMovie = new Movie(
      false,
      '/testPath.jpg',
      [1, 2, 3],
      123,
      'Test',
      'Test Title!',
      'Very test overvieewwww',
      420,
      '/test.jpg',
      '1998-09-02',
      'Testt',
      false,
      10.2,
      1234
    );
    spyOn(movieService, 'loadMovies').and.returnValue(
      of({
        results: [testMovie],
      })
    );
    fixture.detectChanges();
    tick();
    expect(app.loadedMovies[0]['original_title']).toEqual('Test Title!')
  }));
});
