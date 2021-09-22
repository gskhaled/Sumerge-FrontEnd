import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CleanNavComponent } from './clean-nav/clean-nav.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: CleanNavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
