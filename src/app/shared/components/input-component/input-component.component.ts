import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IInputStyles } from './input-componet.interface';




@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss']
  
})
export class InputComponentComponent implements OnInit {
  @Input() stylesObj : IInputStyles = {
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


  constructor(private store : Store) {

  }

  ngOnInit(): void {


  }


}
