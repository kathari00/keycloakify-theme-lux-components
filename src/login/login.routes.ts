import { Route } from '@angular/router';
    export const LOGIN_ROUTES: Route[] = [
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
    },
    {
        path: '**',
        loadComponent: () => import('./error/error.component').then(m => m.ErrorComponent)
    }
];
