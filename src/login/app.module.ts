import { registerLocaleData } from '@angular/common';
import localeDE from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  LuxActionModule,
  LuxMarkdownModule,
  LuxCommonModule,
  LuxComponentsConfigModule,
  LuxComponentsConfigParameters,
  LuxDirectivesModule,
  LuxErrorModule,
  LuxFormModule,
  LuxIconModule,
  LuxLayoutModule,
  LuxPipesModule,
  LuxPopupsModule
} from '@ihk-gfi/lux-components';
import { environment } from '../environments/environment';


import { LoginComponent } from "./pages/login/login.component";
import {AppComponent} from "./template.component";
import { RegisterComponent } from './pages/register/register.component';
import { KcClassPipe } from "../pipes/classname-pipe";

import { LOCALE_ID } from '@angular/core';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, KcClassPipe],
  providers: [
    { provide: LOCALE_ID, useValue: 'de' }
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LuxDirectivesModule,
    LuxIconModule,
    LuxLayoutModule,
    LuxActionModule,
    LuxFormModule,
    LuxCommonModule,
    LuxPipesModule,
    LuxPopupsModule,
    LuxErrorModule,
    LuxMarkdownModule,
    LuxComponentsConfigModule
  ]
})
export class AppModule {}
