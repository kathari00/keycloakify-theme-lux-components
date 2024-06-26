import { Component } from '@angular/core';
import { KcClassPipe } from 'src/pipes/classname-pipe';
import {    
  LuxIconModule,
  LuxLayoutModule,
  LuxActionModule,
  LuxFormModule,
  LuxCommonModule,
  LuxPipesModule,
  LuxPopupsModule,
  LuxErrorModule,
   } from '@ihk-gfi/lux-components';

@Component({
  selector: 'kc-register',
  standalone: true,
  imports: [LuxIconModule, LuxLayoutModule, LuxActionModule, LuxFormModule, LuxCommonModule, LuxPipesModule, LuxPopupsModule, LuxErrorModule, KcClassPipe],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  kcContext: any;
  constructor() {}

  ngOnInit() {
    this.kcContext = window.kcContext;
  }
}
