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
import { KcClassPipe } from "../../pipes/classname.pipe";

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
    LuxMarkdownModule,
    KcClassPipe
]
})
export class LoginComponent implements OnInit {
  myGroup!: FormGroup;
  kcContext!: any;
  classes!: any;
  @ViewChildren(LuxButtonComponent)
  public luxButtons?: QueryList<LuxButtonComponent>;
  responseHtml?: any;

  constructor(private http: HttpClient, private router: Router) {
    this.kcContext = window.kcContext;
  }  

  ngOnInit() {
    this.myGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      credentialId: new FormControl(),
      rememberMe: new FormControl(false),
    });
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.classes = navigation.extras.state['data'];
    }

  }

  
  login() {
    const loginUrl = this.kcContext.url.loginUrl;
    const loginData = this.myGroup?.value;
    const urlEncodedDataString = this.createUrlEncodedData(loginData);
    console.log("blaa", this.myGroup.value)
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'text/html',
    });
    this.http.post(loginUrl, urlEncodedDataString, { headers, responseType: 'text' }).subscribe(
      response => {
        //this is the right response but what to do with it?
      }
    );
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

  private loadNewHtml(html: string): void {
    // Create a new document from the HTML response
    const doc = new DOMParser().parseFromString(html, 'text/html');

    // Replace the current document with the new one
    document.open();
    document.write(doc.documentElement.outerHTML);
    document.close();
  }
}
