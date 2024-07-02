import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit,  QueryList, ViewChildren} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {    
  LuxIconModule,
  LuxLayoutModule,
  LuxActionModule,
  LuxFormModule,
  LuxCommonModule,
  LuxPipesModule,
  LuxPopupsModule,
  LuxErrorModule,
  LuxMarkdownModule,
  LuxSnackbarService
 } from '@ihk-gfi/lux-components';
import {LuxButtonComponent} from "@ihk-gfi/lux-components";


@Component({
  selector: 'kc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  providers: [LuxSnackbarService],
  imports: [LuxIconModule, LuxLayoutModule, LuxActionModule, LuxFormModule, LuxCommonModule, LuxPipesModule, LuxPopupsModule, LuxErrorModule, LuxMarkdownModule, FormsModule, HttpClientModule, CommonModule]
})
export class LoginComponent implements OnInit {

  kcContext?: any;
  trustedHtml: any;
  @ViewChildren(LuxButtonComponent)
  public luxButtons?: QueryList<LuxButtonComponent>;

  constructor() {
    this.kcContext = window.kcContext;
  }  

  ngOnInit() {
    //die buttons müssen auf eine größe mit den Input Feldern gebracht werden, aber das lässt lux components nicht zu...
    setTimeout(() => {
      this.luxButtons?.forEach(button => {
        const buttonLabel = button.elementRef.nativeElement.querySelector('.lux-button-label');
        const parentDiv = button.elementRef.nativeElement.parentElement;
        buttonLabel.style.width = `${parentDiv.offsetWidth-32}px`;
        buttonLabel.style.display = 'flex';
        buttonLabel.style.justifyContent = 'center';
      });
    });
  }


}



