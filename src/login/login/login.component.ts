import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
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
import { LuxButtonComponent } from "@ihk-gfi/lux-components";
import { KcClassPipe } from "../../pipes/classname.pipe";
import { RedirectService } from 'src/service/redirect.service';
import { KcContext } from 'keycloakify/login/KcContext';

@Component({
  selector: 'kc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  providers: [LuxSnackbarService, RedirectService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LuxActionModule,
    LuxFormModule,
    LuxCommonModule,
    KcClassPipe
]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  kcContext: KcContext;
  classes: any;

  constructor(private router: Router, private redirectService: RedirectService) {
    this.kcContext = window.kcContext as KcContext;
  }  

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      credentialId: new FormControl(),
      rememberMe: new FormControl(false),
    });
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.classes = navigation.extras.state['data'];
    }
  }
  login(): void {
    if (this.loginForm.valid) {
      this.redirectService.postRedirect(this.loginForm.value, window.kcContext!.url.loginAction)
    }
  }
}
