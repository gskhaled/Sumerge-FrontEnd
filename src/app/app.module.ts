import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserFormComponent } from './form-switcher/user-form/user-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DemoMaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { UsersService } from './services/users.service';
import { AppRoutingModule } from './app-routing.module';
import { FormSwitcherComponent } from './form-switcher/form-switcher.component';
import { LoadingSpinnerComponent } from './movies-list/loading-spinner/loading-spinner.component';
import { MovieDetailsComponent } from './movies-list/movie-details/movie-details.component';
import { MovieItemComponent } from './movies-list/movie-item/movie-item.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesService } from './services/movies.service';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    HeaderComponent,
    FormSwitcherComponent,
    MoviesListComponent,
    LoadingSpinnerComponent,
    MovieItemComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    DemoMaterialModule,
    MatCardModule,
    MatButtonModule,
    MatNativeDateModule,
    DemoMaterialModule,
  ],
  providers: [UsersService, MoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
