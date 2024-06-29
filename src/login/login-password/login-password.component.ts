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
  selector: 'kc-login',
  templateUrl: './login-password.component.html',
  styleUrls: ['./login-password.component.scss'],
  standalone: true,
  providers: [],
  imports: [LuxIconModule, LuxLayoutModule, LuxActionModule, LuxFormModule, LuxCommonModule, LuxPipesModule, LuxPopupsModule, LuxErrorModule, LuxMarkdownModule]
})
export class LoginPasswordComponent implements AfterViewInit {
  
  kcContext?: any;

  @ViewChildren(LuxButtonComponent)
  public luxButtons?: QueryList<LuxButtonComponent>;

  constructor() {
    this.kcContext = window.kcContext;
  }  

  ngAfterViewInit() {
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



