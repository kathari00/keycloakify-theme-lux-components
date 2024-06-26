import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  PreloadAllModules,
  ROUTES,
  provideRouter,
  withComponentInputBinding,
  withDebugTracing,
  withPreloading
} from '@angular/router';

import { LOGIN_ROUTES } from './login.routes';

export const LoginConfig: ApplicationConfig = {
  providers: [     
    importProvidersFrom(BrowserModule),
    
    provideRouter(
      LOGIN_ROUTES, 
      withPreloading(PreloadAllModules),
      withDebugTracing(),
    ),
  ]
};