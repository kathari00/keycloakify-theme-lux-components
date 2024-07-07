import {Component, OnInit} from '@angular/core';
import { PUBLIC_URL} from "keycloakify/PUBLIC_URL";
import { KcContext } from '../kcContext'
import { Router, RouterOutlet } from '@angular/router';
import { LuxActionModule, LuxCommonModule, LuxLayoutModule } from '@ihk-gfi/lux-components';
import { CommonModule } from '@angular/common';
import { KcClassPipe } from "../../pipes/classname.pipe";

import { SanitizeHtmlPipe } from "../../pipes/sanitize-html.pipe";

@Component({
    selector: 'kc-template',
    standalone: true,
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.scss'],
    imports: [CommonModule, LuxCommonModule, LuxLayoutModule, LuxActionModule, RouterOutlet, KcClassPipe, SanitizeHtmlPipe]
})
export class TemplateComponent implements OnInit {

  kcContext!: KcContext;
 
  constructor(private router: Router) {
    this.kcContext = window.kcContext!;
  }

  ngOnInit() {
    if(this.kcContext) {
      let pageId = this.kcContext.pageId;
      this.router.navigate([this.trimPageIdSuffix(pageId)], {skipLocationChange: true});
      console.log("kcCOntext", this.kcContext.realm.displayNameHtml);
    }
  }

  trimPageIdSuffix(pageId: string): string {
    if (pageId.length > 4) {
      return pageId.substring(0, pageId.length - 4);
    }
    return pageId;
  }

  get publicPath() {
    return PUBLIC_URL;
  }
}
