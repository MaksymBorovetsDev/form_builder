import { Component, forwardRef, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-font-weight-radiobutton-control',
  templateUrl: './font-weight-radiobutton-control.component.html',
  styleUrls: ['./font-weight-radiobutton-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FontWeightRadiobuttonControlComponent),
      multi: true,
    },
  ],
})
export class FontWeightRadiobuttonControlComponent
  implements OnInit, ControlValueAccessor
{
  fontWeightControl = new FormControl();
  onChange!: any;
  onTouch!: any;

  constructor() {}

  ngOnInit(): void {
    this.fontWeightControl.valueChanges.subscribe((val) => this.onChange(val));
  }

  writeValue(value: any) {
    this.fontWeightControl.setValue(value);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
}
