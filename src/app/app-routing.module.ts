import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CleanNavComponent } from './clean-nav/clean-nav.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: CleanNavComponent },
  { path: 'moviesList', component: MoviesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
