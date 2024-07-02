import {Component, OnInit} from '@angular/core';
import { PUBLIC_URL} from "keycloakify/PUBLIC_URL";
import { KcContext } from '../kcContext'
import { Router, RouterOutlet } from '@angular/router';
import { LuxActionModule, LuxCommonModule, LuxLayoutModule } from '@ihk-gfi/lux-components';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'kc-template',
  standalone: true,
  imports: [CommonModule, LuxCommonModule, LuxLayoutModule, LuxActionModule, RouterOutlet],
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent implements OnInit {

  kcContext?: KcContext;
 
  constructor(private router: Router) {
    this.kcContext = window.kcContext;
  }

  ngOnInit() {
    if(this.kcContext) {
    let pageId = this.kcContext.pageId;
    console.log('kcContext: ', this.kcContext);
    this.router.navigate([this.trimPageIdSuffix(pageId)], {skipLocationChange: true});
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
