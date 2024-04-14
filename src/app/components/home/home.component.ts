import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, map, startWith, combineLatest, of, withLatestFrom } from 'rxjs';
import { RouterLink } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';


import { DataService } from '../../services/data.service';
import { TimetoHrminPipe } from '../../pipes/timeto-hrmin.pipe';
import { NumberAmilliPipe } from '../../pipes/number-amilli.pipe';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule, TimetoHrminPipe, NumberAmilliPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  movieList: Movie[] = [];
  movieList$: Observable<Movie[]>;
  filterMovieList$: Observable<Movie[]>;
  filterTitle: FormControl;
  filterTitle$: Observable<string>;
  filterRelease: FormControl;
  filterRelease$: Observable<string>;

  constructor(public dataService: DataService){
    this.filterTitle = new FormControl('');
    this.filterTitle$ = this.filterTitle.valueChanges.pipe(startWith(''));

    this.filterRelease = new FormControl('');
    this.filterRelease$ = this.filterRelease.valueChanges.pipe(startWith(''));

    this.movieList$ = this.dataService.getMovies();
    this.filterMovieList$ = combineLatest([this.movieList$, this.filterTitle$, this.filterRelease$]).pipe(
          map(([movies, filterString, filterYear]) => movies.filter(
            movie => movie.release_date.split("-")[0].includes(filterYear) &&
            movie.title.toLowerCase().indexOf(filterString.toLowerCase()) !== -1 
          ))
    );

    
  }
  
  ngOnInit(): void {
    console.log('movieList:: ', this.movieList);
  }
}
