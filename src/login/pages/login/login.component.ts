import {AfterViewInit, Component, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';

import {LuxButtonComponent} from "@ihk-gfi/lux-components";

@Component({
  selector: 'kc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit {
  @Input() kcContext: any;

  @ViewChildren(LuxButtonComponent)
  public luxButtons?: QueryList<LuxButtonComponent>;

  constructor() {
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
