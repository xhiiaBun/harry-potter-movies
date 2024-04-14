import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';

import { DataService } from '../../services/data.service';
import { TimetoHrminPipe } from '../../pipes/timeto-hrmin.pipe';
import { NumberAmilliPipe } from '../../pipes/number-amilli.pipe';
import { MovieDetail } from '../../models/movie';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, TimetoHrminPipe, NumberAmilliPipe],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit{

  currentMovie = {} as MovieDetail;

  constructor(public dataService: DataService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router){
  }

  ngOnInit(): void {
    let idMovie = this._activatedRoute.snapshot.params['id'];
    
    this.dataService.getMovieByID(idMovie).subscribe(
      (data) => {
        if(!data){
          console.log('error');
          this._router.navigate(['/error']);
        }else{
          this.currentMovie = data;
          console.log('currentMovie:: ', this.currentMovie);
        }
      }
    )
  }
}
