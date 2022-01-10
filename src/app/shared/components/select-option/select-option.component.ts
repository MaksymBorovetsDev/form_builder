import { Component, Input, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ISelectOptionStyles } from './select-option.interface';


@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent implements OnInit {


  
  @Input() stylesObj : ISelectOptionStyles = {
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
