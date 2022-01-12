import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DraganddropComponent } from './draganddrop/draganddrop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop'
import {CdkAccordionModule} from '@angular/cdk/accordion'
import {PortalModule} from '@angular/cdk/portal';
import { MatButtonModule } from '@angular/material/button'
import { MatRadioModule} from '@angular/material/radio'
import { MatInputModule } from '@angular/material/input'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatChipsModule } from '@angular/material/chips'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select';
import { InputComponentComponent } from './shared/components/input-component/input-component.component';
import { ButtonComponentComponent } from './shared/components/button-component/button-component.component';
import { TextareaComponent } from './shared/components/textarea/textarea.component';
import { CheckboxComponent } from './shared/components/checkbox/checkbox.component';
import { SelectOptionComponent } from './shared/components/select-option/select-option.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { AccordionComponent } from './accordion/accordion.component';

import { SigninComponent } from './signin/signin.component';

import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalStylesAccordeonComponent } from './accordion/global-styles-accordeon/global-styles-accordeon.component';
import { FontWeightRadiobuttonControlComponent } from './shared/components/font-weight-radiobutton-control/font-weight-radiobutton-control.component';
import { ChildComponent } from './shared/components/changedetection/child.component';
import { ChangedetectionComponent } from './shared/components/changedetection/changedetection.component';
import { AuthInterceptor } from './services/auth.interceptor';


const INTERCEPTOR_PROVIDER:Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi:true

}



@NgModule({
  declarations: [
    AppComponent,
    DraganddropComponent,
    InputComponentComponent,
    ButtonComponentComponent,
    TextareaComponent,
    CheckboxComponent,
    SelectOptionComponent,
    AccordionComponent,
    SigninComponent,
    LoginComponent,
    GlobalStylesAccordeonComponent,
    FontWeightRadiobuttonControlComponent,
    ChildComponent,
    ChangedetectionComponent




  ],
  imports: [
    BrowserModule,
    MatListModule,
    BrowserAnimationsModule,
    DragDropModule,
    PortalModule,
    CdkAccordionModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }

