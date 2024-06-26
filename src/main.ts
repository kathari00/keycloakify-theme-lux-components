/***************************************************************************************************
 * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
 */
import '@angular/localize/init';

import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import 'zone.js';
import { TemplateComponent } from './login/template/template.component';
import { LoginConfig } from './login/login.config';
import { bootstrapApplication } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}
bootstrapApplication(TemplateComponent, LoginConfig)

  .catch(err => console.error(err));