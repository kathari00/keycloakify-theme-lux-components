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
  public buttons: QueryList<LuxButtonComponent>;

  constructor(private classNameService: ClassNameService) {
  }


  ngAfterViewInit() {
    setTimeout(() => {
      this.buttons.forEach(button => {
          button.elementRef.nativeElement.style.width = '500px';
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
