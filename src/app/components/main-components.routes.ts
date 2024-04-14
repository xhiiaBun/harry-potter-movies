import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then((home) => home.HomeComponent)
    },
    {
        path: 'movie/:id',
        loadComponent: () => import('./movie-detail/movie-detail.component').then((movie) => movie.MovieDetailComponent)
    },
    {
        path: 'error',
        loadComponent: () => import('./error/error.component').then((error) => error.ErrorComponent)
    },
    { 
        path: '',
        redirectTo: '/home', pathMatch: 'full' },
    {
        path: '**',
        loadComponent: () => import('./error/error.component').then((error) => error.ErrorComponent)
    }
    
];

