import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormSwitcherComponent } from './form-switcher/form-switcher.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { AuthGuard } from './services/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: FormSwitcherComponent },
  {
    path: 'moviesList',
    canActivate: [AuthGuard],
    component: MoviesListComponent,
  },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
