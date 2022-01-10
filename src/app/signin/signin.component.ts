import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
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

  getErrorMessageUsername() {
    return this.signInForm.get('username')?.hasError('required')
      ? 'Field with username cannot be empty'
      : '';
  }

  toggleSignInLogIn(link: string) {
    this.router.navigate([link]);
  }

  submit() {
    this.http
      .post<any>('http://localhost:3000/signupUsers', this.signInForm.value)
      .subscribe((res) => {
        alert('Sign Up Successfull');
        this.signInForm.reset();
        this.router.navigate(['login'])
      }, err => {
        alert('Oooops something go wrong')
      });
  }
  // < sign in

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
}
