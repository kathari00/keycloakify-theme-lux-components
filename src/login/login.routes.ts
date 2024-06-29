import { Route } from '@angular/router';
    export const LOGIN_ROUTES: Route[] = [
    {
        path: 'login-username',
        loadComponent: () => import('./login-username/login-username.component').then(m => m.LoginUsernameComponent)
    },
    {
        path: 'login-password',
        loadComponent: () => import('./login-password/login-password.component').then(m => m.LoginPasswordComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent)
    },
    {
        path: '**',
        loadComponent: () => import('./error/error.component').then(m => m.ErrorComponent)
    }
];
