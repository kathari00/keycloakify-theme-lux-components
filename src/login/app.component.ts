import {Component, OnInit} from '@angular/core';
import {PUBLIC_URL} from "keycloakify/PUBLIC_URL";

import {kcContext} from "../services/kcContext";

import {DynamicStyleLoaderService} from "../services/dynamic-style-loader.service";
@Component({
  selector: 'kc-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  protected readonly kcContext =  kcContext;
  protected readonly PUBLIC_URL = PUBLIC_URL;

  constructor(private dynamicStyleLoader: DynamicStyleLoaderService) {
  }

  //CSS ist erst zur Laufzeit verfügbar und wird deshalb hier geladen
  ngOnInit() {
    this.dynamicStyleLoader.loadStyle(`${PUBLIC_URL}/static/media/luxtheme-authentic-min.css`);

  }

}
