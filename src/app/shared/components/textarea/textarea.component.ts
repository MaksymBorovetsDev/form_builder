import { Component, Input, OnInit } from '@angular/core';
import { ITextAreaStyles } from './textarea.interface';



@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {


  @Input() stylesObj : ITextAreaStyles = {
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
