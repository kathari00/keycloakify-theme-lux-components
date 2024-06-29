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
  LuxMarkdownModule,
  LuxSnackbarService,
  ILuxMessage, } from '@ihk-gfi/lux-components';
import {LuxButtonComponent} from "@ihk-gfi/lux-components";


@Component({
  selector: 'kc-login',
  templateUrl: './login-username.component.html',
  styleUrls: ['./login-username.component.scss'],
  standalone: true,
  providers: [LuxSnackbarService],
  imports: [LuxIconModule, LuxLayoutModule, LuxActionModule, LuxFormModule, LuxCommonModule, LuxPipesModule, LuxPopupsModule, LuxErrorModule, LuxMarkdownModule]
})
export class LoginUsernameComponent implements AfterViewInit {
  messages: ILuxMessage[] = [
    {text: 'Message #1', iconName: 'lux-interface-lighting-light-bulb', color: 'green'},
    {text: 'Message #2', iconName: 'lux-interface-alert-alarm-bell-2', color: 'blue'},
    {text: 'Message #3', iconName: 'lux-folder-open', color: 'orange'},
  ];
  
  kcContext?: any;

  @ViewChildren(LuxButtonComponent)
  public luxButtons?: QueryList<LuxButtonComponent>;

  constructor(private snackbarService: LuxSnackbarService) {
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



