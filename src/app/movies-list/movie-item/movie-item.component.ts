// import {
//   trigger,
//   state,
//   style,
//   transition,
//   animate,
// } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
  // animations: [
  //   trigger('bodyExpansion', [
  //     state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
  //     state('expanded', style({ height: '*', visibility: 'visible' })),
  //     transition(
  //       'expanded <=> collapsed, void => collapsed',
  //       animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
  //     ),
  //   ]),
  // ],
})
export class MovieItemComponent implements OnInit {
  @Input() movie!: Movie;
  // state = 'collapsed';
  
  ngOnInit(): void {}

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(MovieDetailsComponent, {
      width: '75%',
      data: { movie: this.movie },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log('The dialog was closed');
      // console.log(result)
    });
  }
}
