import {AfterViewInit, Component, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ClassNameService} from "../../../services/class-name.service";
import {LuxButtonComponent} from "@ihk-gfi/lux-components";

@Component({
  selector: 'kc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit {
  @Input() kcContext: any;
  @ViewChildren(LuxButtonComponent)
  public luxButtons: QueryList<LuxButtonComponent>;

  constructor(private classNameService: ClassNameService) {
  }


  ngAfterViewInit() {
    setTimeout(() => {

      this.luxButtons.forEach(button => {
        const buttonLabel = button.elementRef.nativeElement.querySelector('.mat-flat-button');
        console.log("buttonLabel", buttonLabel);
        buttonLabel.style.width = '1999px;';
        buttonLabel.style.display = 'flex';
        buttonLabel.style.justifyContent = 'center';
      });

    });
  }
  getClassName(classKey: string): string {
    console.log("getClassName", classKey, this.classNameService.getClassName(classKey));
    return this.classNameService.getClassName(classKey);
  }



  onSubmit() {
    console.log("submit")
  }
}
