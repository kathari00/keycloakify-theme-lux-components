import {AfterViewInit, Component, Input,  QueryList, ViewChildren} from '@angular/core';
import {    
  LuxIconModule,
  LuxLayoutModule,
  LuxActionModule,
  LuxFormModule,
  LuxCommonModule,
  LuxPipesModule,
  LuxPopupsModule,
  LuxErrorModule,
  LuxMarkdownModule, } from '@ihk-gfi/lux-components';
import {LuxButtonComponent} from "@ihk-gfi/lux-components";


@Component({
  selector: 'kc-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  standalone: true,
  providers: [],
  imports: [LuxIconModule, LuxLayoutModule, LuxActionModule, LuxFormModule, LuxCommonModule, LuxPipesModule, LuxPopupsModule, LuxErrorModule, LuxMarkdownModule]
})
export class ErrorComponent implements AfterViewInit {
  
  kcContext?: any;

  constructor() {
    this.kcContext = window.kcContext;
  }


  ngAfterViewInit() {
  
  }
}



