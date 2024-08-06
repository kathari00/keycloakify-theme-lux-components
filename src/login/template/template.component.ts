import {Component, OnInit} from '@angular/core';
import { PUBLIC_URL} from "keycloakify/PUBLIC_URL";
import { KcContext } from '../kcContext'
import { Router, RouterOutlet } from '@angular/router';
import { LuxActionModule, LuxCommonModule, LuxLayoutModule } from '@ihk-gfi/lux-components';
import { CommonModule } from '@angular/common';
import { KcClassPipe } from "../../pipes/classname.pipe";
import { SanitizeHtmlPipe } from "../../pipes/sanitize-html.pipe";
import { ExtraClassesService } from 'src/service/extra-classes.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'kc-template',
    standalone: true,
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.scss'],
    imports: [CommonModule, LuxCommonModule, LuxLayoutModule, LuxActionModule, RouterOutlet, KcClassPipe, SanitizeHtmlPipe, HttpClientModule],
    providers: [ExtraClassesService]
})
export class TemplateComponent implements OnInit {

  kcContext!: KcContext;
  classes$: Observable<any>;

 
  constructor(private router: Router, private extraClassesService: ExtraClassesService) {
    this.kcContext = window.kcContext!;
    
    this.classes$ = this.extraClassesService.getClasses();

    
  }

  ngOnInit() {
    if (this.kcContext) {
      let pageId = this.kcContext.pageId;

      // Subscribe to the classes$ observable
      this.classes$.subscribe(classes => {
        // Navigate after receiving the classes data
        this.router.navigate([this.trimPageIdSuffix(pageId)], {
          skipLocationChange: true,
          state: { data: classes }
        });
        console.log("kcContext", window.kcContext);
      });
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
