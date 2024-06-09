import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { LuxThemeService } from '@ihk-gfi/lux-components';
import { LuxSideNavComponent } from '@ihk-gfi/lux-components';

import {PUBLIC_URL} from "keycloakify/PUBLIC_URL";

import {kcContext} from "../services/kcContext";
import {ClassNameService} from "../services/class-name.service";

import {DynamicStyleLoaderService} from "../services/dynamic-style-loader.service";
@Component({
  selector: 'kc-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  protected readonly kcContext =  kcContext;
  protected readonly PUBLIC_URL = PUBLIC_URL;
  protected pageHeaderText = '';
  constructor(private dynamicStyleLoader: DynamicStyleLoaderService, public router: Router, themeService: LuxThemeService,  private classNameService: ClassNameService) {
  }
  ngOnInit() {
    this.dynamicStyleLoader.loadStyle(`${PUBLIC_URL}/static/media/luxtheme-authentic-min.css`);

  }

}
