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
import { LuxComponentsConfigModule, LuxComponentsConfigParameters } from '@ihk-gfi/lux-components';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ExtraClassesService } from 'src/service/extra-classes.service';


const myConfiguration: LuxComponentsConfigParameters = {
  generateLuxTagIds: environment.generateLuxTagIds, // Stellen Sie sicher, dass `environment` importiert wird
  iconBasePath: 'https://cdn.gfi.ihk.de/lux-components/icons-and-fonts/v1.8.0/',
  labelConfiguration: {
    allUppercase: true,
    notAppliedTo: ['lux-link', 'lux-menu-item', 'lux-side-nav-item', 'lux-tab', 'lux-step']
  }
};

export const LoginConfig: ApplicationConfig = {
  providers: [     
    importProvidersFrom(
      BrowserModule,
      HttpClient,
      ExtraClassesService,
      LuxComponentsConfigModule.forRoot(myConfiguration) // LuxComponentsConfig hinzugefügt
    ),
    
    provideRouter(
      LOGIN_ROUTES, 
      withPreloading(PreloadAllModules),
      withDebugTracing(),
    ),

  ]
};