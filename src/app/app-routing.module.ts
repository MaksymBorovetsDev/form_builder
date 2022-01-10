import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DraganddropComponent } from './draganddrop/draganddrop.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'formbuilder', component: DraganddropComponent, canActivate: [AuthGuardService]},
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }