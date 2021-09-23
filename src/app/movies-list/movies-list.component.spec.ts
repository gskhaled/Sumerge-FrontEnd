import { HttpClientModule } from '@angular/common/http';
import { fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { User, UsersService } from '../clean-nav/login/users.service';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { MoviesListComponent } from './movies-list.component';

describe('Component: MoviesList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesListComponent, LoadingSpinnerComponent],
      providers: [UsersService],
      imports: [HttpClientModule, MatPaginatorModule],
    }).compileComponents();
  });

  it('Should create the component', fakeAsync(() => {
    let fixture = TestBed.createComponent(MoviesListComponent);
    let app = fixture.debugElement.componentInstance;
    tick();
    expect(app).toBeTruthy();
  }));

  it('User signed in', () => {
    let fixture = TestBed.createComponent(MoviesListComponent);
    let userService = fixture.debugElement.injector.get(UsersService);
    fixture.detectChanges();
    userService.signedInUser = new User('gasser@g.com', '1234');
    expect(userService.signedInUser).toBeTruthy();
  });

  it(
    'Loaded movies after user sign in',
    waitForAsync(() => {
      let fixture = TestBed.createComponent(MoviesListComponent);
      let app = fixture.debugElement.componentInstance;
      let userService = fixture.debugElement.injector.get(UsersService);
      userService.signedInUser = new User('gasser@g.com', '1234');
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(app.loadedMovies).not.toHaveSize(0);
      });
    })
  );

  it(
    'Movies loaded with correct parameters',
    waitForAsync(() => {
      let fixture = TestBed.createComponent(MoviesListComponent);
      let app = fixture.debugElement.componentInstance;
      let userService = fixture.debugElement.injector.get(UsersService);
      userService.signedInUser = new User('gasser@g.com', '1234');
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let firstMovie = app.loadedMovies[0];
        let movieAttributes = [];
        for (let key in firstMovie) {
          movieAttributes.push(key);
        }
        expect(movieAttributes).toContain('title');
      });
    })
  );
});
