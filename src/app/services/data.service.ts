import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, catchError } from "rxjs";

import { Movie, MovieDetail } from "../models/movie";

@Injectable({
    providedIn: 'root',
})
export class DataService{
    constructor(private http: HttpClient) {}

    getMovies():Observable<Array<Movie>>{
        return this.http.get<Array<Movie>>('/movies')
    }

    getMovieByID(movieID: string){
        return this.http.get<MovieDetail>('/movies/' + movieID)
    }
}