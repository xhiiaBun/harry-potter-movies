import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./components/main-components.routes').then((home) => home.routes)
    }
];
