import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { setIsAuthenticatedAction, setUserAction } from '../reducers/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy{
  logInForm!: FormGroup;
  private ngUnsubscribe = new Subject<void>();

  // Sign In >

  hide = true;
  signIn = true;

  getErrorMessageEmail() {
    if (this.logInForm.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.logInForm.get('email')?.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  getErrorMessagePassword() {
    if (this.logInForm.get('password')?.hasError('required')) {
      return 'Field with password cannot be empty';
    }

    return this.logInForm.get('password')?.hasError('minlength')
      ? 'Password must contain at list 6 characters'
      : '';
  }

  toggleSignInLogIn(link: string) {
    this.router.navigate([link]);
  }

  submit() {
    this.http
      .get<any>('http://localhost:3000/signupUsers')
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res) => {
        const user = res.find((a: any) => {
          
          return (
            a.email === this.logInForm.value.email &&
            a.password === this.logInForm.value.password
          );
          
        });

        if (user) {
          this.store.dispatch(
            setUserAction({
              id: user.id,
              password: user.password,
              username: user.username,
              email: user.email,

            })
          );

          this.router.navigate(['formbuilder'])
          this.logInForm.reset();
        } else {
          alert('User not found!');
        }
      });
  }
  // < sign in

  constructor(
    private router: Router,
    private http: HttpClient,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.logInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
