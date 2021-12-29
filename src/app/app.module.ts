import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DraganddropComponent } from './draganddrop/draganddrop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop'
import {CdkAccordionModule} from '@angular/cdk/accordion'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select';
import { InputComponentComponent } from './input-component/input-component.component';
import { ButtonComponentComponent } from './button-component/button-component.component';
import { PortalComponent } from './portal/portal.component';
import { TextareaComponent } from './textarea/textarea.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SelectOptionComponent } from './select-option/select-option.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { AccordionComponent } from './accordion/accordion.component';
import { StylesControlerSectionComponent } from './styles-controler-section/styles-controler-section.component'




@NgModule({
  declarations: [
    AppComponent,
    DraganddropComponent,
    InputComponentComponent,
    ButtonComponentComponent,
    PortalComponent,
    TextareaComponent,
    CheckboxComponent,
    SelectOptionComponent,
    AccordionComponent,
    StylesControlerSectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    CdkAccordionModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

