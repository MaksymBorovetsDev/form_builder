import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  signInForm!: FormGroup;

  // Sign In >

  hide = true;
  signIn = true;

  getErrorMessageEmail() {
    if (this.signInForm.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.signInForm.get('email')?.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  getErrorMessagePassword() {
    if (this.signInForm.get('password')?.hasError('required')) {
      return 'Field with password cannot be empty';
    }

    return this.signInForm.get('password')?.hasError('minlength')
      ? 'Password must contain at list 6 characters'
      : '';
  }

  toggleSignInLogIn(link:string) {
    this.router.navigate([link])

  }

  submit() {
    if (this.signInForm.valid) {
      this.signIn = false;
    }
  }
  // < sign in

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
}
