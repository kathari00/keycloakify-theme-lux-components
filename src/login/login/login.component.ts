import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  kcContex?: any;
  
  @ViewChildren(LuxButtonComponent)
  public luxButtons?: QueryList<LuxButtonComponent>;
  responseHtml?: any;

  constructor(private http: HttpClient, private router: Router, private sanitizer: DomSanitizer, private renderer: Renderer2) {
    this.kcContex = window.kcContext;
  }  

  ngOnInit() {
    this.myGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      credentialId: new FormControl(),
      rememberMe: new FormControl(false),
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

  login(): void {
    if (this.kcContex?.url?.loginAction) {
      const loginUrl = this.kcContex.url.loginAction;
      const loginData = this.myGroup?.value;
      const urlEncodedDataString = this.createUrlEncodedData(loginData);

      let headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8',
      });

      this.http.post(loginUrl, urlEncodedDataString, { headers, responseType: 'text' }).subscribe(
        response => {
          this.responseHtml = response;
          console.log("kcContext after set innerhtml", window.kcContext);
        },
        error => {
          console.error('Error loading HTML:', error);
        }
      );
    }
  }

  createUrlEncodedData(data: any): string {
    const urlEncodedData = new URLSearchParams();
    Object.keys(data).forEach(key => urlEncodedData.append(key, data[key]));
    return urlEncodedData.toString();
  }

  executeScriptsFromResponse(response: string): void {
    // Example: Extract script tags and execute them if needed
    const tempElement = document.createElement('div');
    tempElement.innerHTML = response;

    const scriptElements = tempElement.getElementsByTagName('script');
    for (let i = 0; i < scriptElements.length; i++) {
      const script = document.createElement('script');
      script.type = scriptElements[i].type || 'text/javascript';
      if (scriptElements[i].textContent) {
        script.textContent = scriptElements[i].textContent;
      } else if (scriptElements[i].src) {
        script.src = scriptElements[i].src;
      }

      document.body.appendChild(script); // Append script to execute
    }
  }
}
