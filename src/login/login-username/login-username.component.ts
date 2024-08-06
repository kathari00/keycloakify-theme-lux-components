import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { KcContext } from '../kcContext';
import { Router } from '@angular/router';
import { RedirectService } from 'src/service/redirect.service';
import { LuxActionModule, LuxFormModule } from '@ihk-gfi/lux-components';
import { KcClassPipe } from "../../pipes/classname.pipe";

@Component({
  selector: 'kc-login-password',
  standalone: true,
  imports: [CommonModule, LuxFormModule, LuxActionModule, KcClassPipe, ReactiveFormsModule],
  templateUrl: './login-username.component.html',
  styleUrls: ['./login-username.component.scss'],
})
export class LoginUsernameComponent {

  myGroup!: FormGroup;
  kcContext: KcContext;
  classes: any;

  constructor(private router: Router, private redirectService: RedirectService) {
    this.kcContext = window.kcContext as KcContext;
  }  

  ngOnInit() {
    this.myGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl(''),
      credentialId: new FormControl(),
      rememberMe: new FormControl(false),
    });
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.classes = navigation.extras.state['data'];
    }
  }
  public login = () => this.redirectService.postRedirect(this.myGroup.value, this.kcContext.url.loginAction);
}
