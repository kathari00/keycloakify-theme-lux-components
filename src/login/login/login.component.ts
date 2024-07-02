import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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

@Component({
  selector: 'kc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  providers: [LuxSnackbarService],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    LuxIconModule,
    LuxLayoutModule,
    LuxActionModule,
    LuxFormModule,
    LuxCommonModule,
    LuxPipesModule,
    LuxPopupsModule,
    LuxErrorModule,
    LuxMarkdownModule
  ]
})
export class LoginComponent implements OnInit {
  myGroup!: FormGroup;
  kcContext?: any;
  
  @ViewChildren(LuxButtonComponent)
  public luxButtons?: QueryList<LuxButtonComponent>;

  constructor(private http: HttpClient, private router: Router) {
    this.kcContext = window.kcContext;
  }  

  ngOnInit() {
    this.myGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      credentialId: new FormControl(''),
      rememberMe: new FormControl(''),
    });

    setTimeout(() => {
      this.luxButtons?.forEach(button => {
        const buttonLabel = button.elementRef.nativeElement.querySelector('.lux-button-label');
        const parentDiv = button.elementRef.nativeElement.parentElement;
        buttonLabel.style.width = `${parentDiv.offsetWidth - 32}px`;
        buttonLabel.style.display = 'flex';
        buttonLabel.style.justifyContent = 'center';
      });
    });
  }

  login() {
    const loginUrl = this.kcContext?.url.loginAction;
    this.http.post(loginUrl, this.myGroup?.value).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
