import { Component } from '@angular/core';

@Component({
  selector: 'kc-register',
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
