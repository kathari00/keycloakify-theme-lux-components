import {Component, OnInit} from '@angular/core';
import { PUBLIC_URL} from "keycloakify/PUBLIC_URL";
import { KcContext } from './kcContext'

@Component({
  selector: 'kc-app-root',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class AppComponent implements OnInit {

  kcContext?: KcContext;
 

  constructor() {
    this.kcContext = window.kcContext;
  }

  ngOnInit() {
    this.loadStyle(`${PUBLIC_URL}/static/media/luxtheme-authentic-min.css`);
  }

  loadStyle(url: string) {
    const head = document.getElementsByTagName('head')[0];
    let style: HTMLLinkElement = document.createElement('link');
    style.href = url;
    style.type = 'text/css';
    style.rel = 'stylesheet';

    head.appendChild(style);
  }

  get publicPath() {
    return PUBLIC_URL;
  }
}
