import {Component, OnInit} from '@angular/core';
import { PUBLIC_URL} from "keycloakify/PUBLIC_URL";
import { KcContext } from '../../kcContext'
import { Router, RouterOutlet } from '@angular/router';
import { LuxActionModule, LuxCommonModule, LuxLayoutModule } from '@ihk-gfi/lux-components';

@Component({
  selector: 'kc-template-footer',
  standalone: true,
  imports: [LuxCommonModule, LuxLayoutModule, LuxActionModule, RouterOutlet],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  kcContext?: KcContext;
 
  constructor() {
    this.kcContext = window.kcContext;
  }

  ngOnInit() {
    if(this.kcContext) {

    }
  }

  get publicPath() {
    return PUBLIC_URL;
  }
}
