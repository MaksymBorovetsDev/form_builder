import { Component, Input, OnInit } from '@angular/core';
import { ICheckboxStyles } from './checkbox.interface';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() stylesObj : ICheckboxStyles = {
    width: '160px',
    height: '50px',
    placeholder: '',
    fontWeight: 'normal',
    fontSize: '5px',
    colorRGB: 'black',
    borderStyle: 'none',
    borderWidth: '1px',
    borderRadius: '1px',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
