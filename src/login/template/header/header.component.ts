import {Component, OnInit} from '@angular/core';
import { PUBLIC_URL} from "keycloakify/PUBLIC_URL";
import { KcContext } from '../../kcContext'
import { Router, RouterOutlet } from '@angular/router';
import { LuxActionModule, LuxCommonModule, LuxLayoutModule } from '@ihk-gfi/lux-components';

@Component({
  selector: 'kc-template-header',
  standalone: true,
  imports: [LuxCommonModule, LuxLayoutModule, LuxActionModule, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  kcContext?: KcContext;
 
  constructor(private router: Router) {
    this.kcContext = window.kcContext;
  }

  ngOnInit() {
    if(this.kcContext) {
    let pageId = this.kcContext.pageId;
    console.log('pageId: ' + pageId);
    this.router.navigate([this.trimPageIdSuffix(pageId)], {skipLocationChange: true});
    }
  }

  trimPageIdSuffix(pageId: string): string {
    if (pageId.length > 4) {
      return pageId.substring(0, pageId.length - 4);
    }
    return pageId;
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
