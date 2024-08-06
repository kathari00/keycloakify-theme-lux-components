import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KcClassPipe } from "../../pipes/classname.pipe";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RedirectService } from 'src/service/redirect.service';
import { LuxActionModule, LuxFormModule } from '@ihk-gfi/lux-components';

@Component({
  selector: 'kc-login-update-password',
  standalone: true,
  imports: [CommonModule, KcClassPipe, LuxFormModule, LuxActionModule, ReactiveFormsModule],
  templateUrl: './login-update-password.component.html',
  styleUrls: ['./login-update-password.component.scss']
})
export class LoginUpdatePasswordComponent {
  passwordUpdateForm!: FormGroup;

  constructor(private fb: FormBuilder, private redirectService: RedirectService) {
    this.passwordUpdateForm = this.fb.group({
      "password-new": ['', Validators.required],
      "password-confirm": ['', Validators.required]
    });
  }

  login(): void {
    if (this.passwordUpdateForm.valid) {
      this.redirectService.postRedirect(this.passwordUpdateForm.value, window.kcContext!.url.loginAction)
    }
  }

}
