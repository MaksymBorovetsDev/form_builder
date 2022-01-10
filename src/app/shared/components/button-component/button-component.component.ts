import { Component, Input, OnInit } from '@angular/core';
import { IButtonStyles } from './button-component.interface';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.scss']
})
export class ButtonComponentComponent implements OnInit {

  @Input() stylesObj : IButtonStyles = {
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
